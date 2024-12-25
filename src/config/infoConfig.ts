/**
 * 网站配置文件
 * 包含所有个人信息和网站设置
 */

// 从本地存储获取配置
const getConfig = () => {
  if (typeof window === 'undefined') return null
  try {
    const config = localStorage.getItem('portfolio-config')
    return config ? JSON.parse(config) : null
  } catch {
    return null
  }
}

// 个人基本信息
const config = getConfig()

export const name = config?.name || '您的姓名'

// 从本地存储获取配置，如果没有则使用默认值
export const headline = config?.headline || "你好，我是一名初中生"
export const introduction = config?.introduction || "我热爱编程，喜欢创造有趣的东西。这是我的个人网站，记录了我的学习经历和作品。"
export const email = config?.email || 'your@email.com'
export const githubUsername = config?.github || '您的GitHub用户名'

// 关于我页面的内容
export const aboutMeHeadline = config?.aboutMeHeadline || "你好，让我介绍一下自己"
export const aboutParagraphs = config?.aboutParagraphs || [
  "我是一名初中生，对编程充满热情。我的编程学习之旅开始于去年，从简单的HTML和CSS开始。",
  "除了编程，我还喜欢画画、下棋和打篮球。我相信这些兴趣爱好能让我的思维更加活跃。",
  "这个网站是我的第一个作品，我会在这里分享我的学习经历和创作的小项目。"
]

// 博客页面设置
export const blogHeadLine = config?.blogHeadLine || "我的想法和经历"
export const blogIntro = config?.blogIntro || "在这里，我会分享我的学习心得和生活感悟"

// 社交媒体链接类型定义
export type SocialLinkType = {
  name: string    // 社交媒体名称
  icon: string    // 图标名称
  href: string    // 链接地址
}

// 社交媒体链接配置
export const socialLinks = config?.socialLinks || [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/realcoreychiu'
  },
  {
    name: 'Bsky',
    icon: 'bsky',
    href: 'https://bsky.app/profile/coreychiu.com'
  },
  {
    name: 'Jike',
    icon: 'pill',
    href: 'https://okjk.co/P7c1zU'
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/iamcorey'
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ'
  },
  {
    name: 'Ko-fi',
    icon: 'coffee',
    href: 'https://ko-fi.com/coreychiu'
  }
]

// 技术栈图标配置
// 图标来源：https://simpleicons.org/
export const techIcons = config?.techIcons || [
  "html5",          // HTML5
  "css3",           // CSS3
  "javascript",     // JavaScript
  "python",         // Python
  "visualstudiocode", // VS Code编辑器
  "github",         // GitHub
  "figma"           // Figma设计工具
]

// 项目展示配置
export const projectHeadLine = config?.projectHeadLine || "我的作品"
export const projectIntro = config?.projectIntro || "这些是我创建的一些有趣项目"

// 项目列表
export const projects = config?.projects || [
  {
    name: "我的第一个网站",
    description: "使用HTML和CSS制作的个人介绍网站",
    link: "#",
    icon: "🌐"
  },
  {
    name: "简单计算器",
    description: "用JavaScript制作的网页计算器",
    link: "#",
    icon: "🔢"
  },
  {
    name: "涂鸦板",
    description: "可以在线画画的小工具",
    link: "#",
    icon: "🎨"
  }
]

// 活动展示配置
export const activityHeadLine = config?.activityHeadLine || "最近在做什么"
export const activityIntro = config?.activityIntro || "记录我的学习和生活"

export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'
