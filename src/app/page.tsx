/**
 * 主页面组件
 * Home Page Component
 * 
 * 包含以下主要部分：
 * - 个人简介
 * - 活动展示
 * - 博客文章列表
 * - 项目展示
 */
import { Container } from '@/components/layout/Container'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction } from '@/config/infoConfig'
import { BlogCard } from '@/components/home/BlogCard'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import { ProjectCard } from '@/components/project/ProjectCard'
import { GithubProjectCard } from '@/components/project/GithubProjectCard'
import { projectHeadLine, projectIntro, blogHeadLine, blogIntro, techIcons, activityHeadLine, activityIntro } from '@/config/infoConfig'
import { featuredProjects, githubProjects } from '@/config/projects'
import GithubContributions from '@/components/home/GithubCalendar'
import GitHubSnake from '@/components/home/GitHubSnake'
import { CustomIcon } from '@/components/shared/CustomIcon'
import IconCloud from "@/components/ui/icon-cloud";
import { TweetGrid } from "@/components/home/TweetGrid";

/**
 * 主页面的默认导出组件
 * Default export for home page
 * 
 * 使用 Container 组件包装所有内容，确保布局一致性
 * Uses Container component to wrap all content for consistent layout
 */
export default async function Home() {
  let blogList = (await getAllBlogs()).slice(0, 4)
  // console.log('blogList: ', blogList)

  return (
    <>
      <Container className="mt-9">
        {/* 个人简介 */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className='md:mt-20'>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
              {headline}
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              {introduction}
            </p>
            <SocialLinks className='md:mt-24'/>
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>
        <div className="mt-6 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
          {/* <GithubContributions /> */}
          <GitHubSnake />
        </div>
        {/* 项目展示 */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl opacity-80">
            {projectHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {projectIntro}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} titleAs='h3'/>
            ))}
          </ul>
        </div>
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <CustomIcon name='github' size={28}/>
            Open Source
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {githubProjects.map((project) => (
              <GithubProjectCard key={project.name} project={project} titleAs='h3'/>
            ))}
          </ul>
        </div>
        <div className="mx-auto flex flex-col max-w-xl gap-6 py-8 my-8 lg:max-w-none border-t border-muted">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl opacity-80">
            {blogHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {blogIntro}
          </p>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* 左侧博客列表 */}
          {/* blog */}
          <div className="flex flex-col gap-16">
            {blogList.map((blog: BlogType) => (
              <BlogCard key={blog.slug} blog={blog} titleAs='h3'/>
            ))}
          </div>

          {/* 右侧活动展示 */}
          {/* right column */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Career />
            <Education />

          </div>
        </div>
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl opacity-80">
            {activityHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-2">
            {activityIntro}
          </p>
          <TweetGrid />
        </div>
      </Container>
    </>
  )
}
