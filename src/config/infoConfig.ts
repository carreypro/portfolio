export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'carrey'
export const headline = 'Product Manager, Independent AI Developer.'
export const introduction = 'I\'m Carrey, a former product manager at a leading internet company and an entrepreneur. Now, I\'m using AI to shape my second life.'
export const email = 'nafiuriak@163.com'
export const githubUsername = 'carreypro'

// about page
export const aboutMeHeadline = "I'm carrey, a Product Manager based in Hangzhou, China."
export const aboutParagraphs = [
  "I used to be an esports player and event planner before transitioning to become a product manager.",
  "Now, I’m an independent AI developer, creating products I love.",
  "I’m also a film researcher and a cinephile with a passion for analog photography."
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
    href: 'https://x.com/zhizhikai'
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
    href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ'
  },
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];
