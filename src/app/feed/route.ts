import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'
import { nameConfig, email } from '@/config/infoConfig'
import { getBlogBySlug } from '@/lib/blogs'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface BlogData {
  title: string
  description: string
  date: string
  image?: string
  tags?: string[]
}

export async function GET(req: Request) {
  try {
    // 从请求URL中获取主机名
    const url = new URL(req.url)
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `${url.protocol}//${url.host}`
    const siteTitle = `${nameConfig.raw}'s Blog`
    const siteDescription = `${nameConfig.raw}'s personal blog about programming, design, and life.`

    const author = {
      name: nameConfig.raw,
      email: email,
      link: siteUrl,
    }

    const feed = new Feed({
      title: siteTitle,
      description: siteDescription,
      id: siteUrl,
      link: siteUrl,
      language: 'zh-CN',
      image: `${siteUrl}/favicon.ico`,
      favicon: `${siteUrl}/favicon.ico`,
      copyright: `© ${new Date().getFullYear()} ${nameConfig.raw}. All rights reserved.`,
      author: author,
      feedLinks: {
        rss2: `${siteUrl}/feed`,
        json: `${siteUrl}/feed.json`,
        atom: `${siteUrl}/feed.atom`,
      },
    })

    // 读取博客文件
    const blogDir = path.join(process.cwd(), 'src/content/blog')
    const blogFiles = await fs.readdir(blogDir)
    const mdxFiles = blogFiles.filter(file => file.endsWith('.mdx'))

    if (mdxFiles.length === 0) {
      console.warn('No blog posts found')
    }

    // 按日期排序文章
    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        try {
          const slug = file.replace(/\.mdx$/, '')
          const filePath = path.join(blogDir, file)
          const source = await fs.readFile(filePath, 'utf-8')
          const { data, content } = matter(source)
          return { slug, data: data as BlogData, content }
        } catch (error) {
          console.error(`Error processing file ${file}:`, error)
          return null
        }
      })
    )

    // 过滤掉处理失败的文章并按日期降序排序
    const validPosts = posts.filter((post): post is NonNullable<typeof post> => post !== null)
    validPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())

    // 添加文章到feed
    for (const post of validPosts) {
      const { slug, data, content } = post
      const postUrl = `${siteUrl}/blogs/${slug}`

      feed.addItem({
        title: data.title,
        id: postUrl,
        link: postUrl,
        description: data.description,
        content: content,
        author: [author],
        date: new Date(data.date),
        image: data.image,
        category: data.tags?.map(tag => ({ name: tag })),
      })
    }

    // 根据请求的格式返回不同的feed
    const accept = req.headers.get('accept')
    const headers = {
      'cache-control': 's-maxage=86400',
    }

    if (accept?.includes('application/json')) {
      return new Response(feed.json1(), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      })
    }

    if (accept?.includes('application/atom+xml')) {
      return new Response(feed.atom1(), {
        status: 200,
        headers: {
          'Content-Type': 'application/atom+xml',
          ...headers,
        },
      })
    }

    // 默认返回RSS 2.0
    return new Response(feed.rss2(), {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        ...headers,
      },
    })
  } catch (error) {
    console.error('Error generating feed:', error)
    return new Response('Error generating feed', { status: 500 })
  }
}
