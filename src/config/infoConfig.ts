export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// name config
export const nameConfig = {
  raw: 'carrey',
  withPrefix: {
    im: "I'm carrey",
    by: "by carrey",
  }
}

// personal info
export const headline = 'Product Manager, Independent AI Developer.'
export const introduction = "I'm carrey, a former product manager at a leading internet company and an entrepreneur. Now, I'm using AI to shape my second life."
export const email = 'nafiuriak@gmail.com'
export const githubUsername = 'carreypro'

// about page
export const aboutMeHeadline = "I'm carrey, a Product Manager based in Hangzhou, China."
export const aboutParagraphs = [
  "I used to be an esports player and event planner before transitioning to become a product manager.",
  "Now, I'm an independent AI developer, creating products I love.",
  "I'm also a film researcher and a cinephile with a passion for analog photography."
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/carreypro'
  },
  {
    name: 'Bsky',
    icon: 'bsky',
    href: 'https://bsky.app/profile/carrey01.bsky.social'
  },
  {
    name: 'Jike',
    icon: 'pill',
    href: 'https://okjk.co/zIdfP5'
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/carreypro'
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: '#'
  },
  {
    name: 'Xiaohongshu',
    icon: 'xiaohongshu',
    href: 'https://www.xiaohongshu.com/user/profile/650fdbc00000000012007d83'
  },
]

// https://simpleicons.org/
export const techIcons = [
  // AI 工具
  "openai",
  "stability",
  "huggingface",
  "codeium",

  // 云服务/部署
  "cloudflare",
  "vercel",
  
  // 开发工具
  "github",
  
  // 平台
  "ios",
  "apple",
  "wechat",
  
  // 设计工具
  "figma",
  "adobexd",
  "adobephotoshop",
  "sketch",
  
  // 产品管理工具
  "notion",
  
  // 原型工具
  "axure",
  
  // 分析工具
  "googleanalytics",
  "mixpanel"
];
