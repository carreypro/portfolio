// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I have worked on various projects, ranging from simple websites to complex web applications, games, and more. Here are a few of my favorite ones:"

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
// featured projects 
export const featuredProjects: Array<ProjectItemType> = [
  {
    name: '永劫无间系列',
    description: '24 Entertainment工作室开发的多人动作竞技游戏',
    link: { href: 'https://www.yjwujian.cn/index.html', label: '永劫无间' },
    tags: ['官网', '游戏'],
    category: ['Game'],
    techStack: ['Next.js', 'TailwindCSS', 'TypeScript'],
  },
  {
    name: '火山卡片',
    description: 'AI 生成你的专属封面',
    link: { href: 'https://card.carreypro.com/', label: '火山卡片' },
    tags: ['AI', '工具'],
    logo: 'volcano',
    category: ['Web'],
  },
  {
    name: '简历重塑',
    description: 'AI驱动简历优化',
    link: { href: 'https://resume.carreypro.com/', label: '简历重塑' },
    tags: ['AI', '工具'],
    logo: 'resume',
    category: ['Web'],
  },
  {
    name: '猫修APP',
    description: '游戏社区',
    link: { href: 'https://www.lmaoyx.com/app', label: '猫修APP' },
    tags: ['APP', '游戏社区'],
    logo: 'maoxiu',
    category: ['App'],
    techStack: ['React Native', 'TypeScript', 'TailwindCSS'],
  },
  {
    name: '猫修平台',
    description: '汉化和修改器平台',
    link: { href: 'https://www.lmaoyx.com', label: '猫修平台' },
    tags: ['汉化', '修改器', '游戏'],
    logo: 'maoxiu',
    category: ['Web'],
    techStack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: '像素工坊',
    description: '在线图片格式转换与压缩工具',
    link: { href: 'https://pic.carreypro.com/', label: '像素工坊' },
    tags: ['工具'],
    logo: 'pixel',
    category: ['Web'],
  },
  {
    name: '游侠网',
    description: '中国最具权威的单机游戏门户',
    link: { href: 'https://www.ali213.net/', label: '游侠网' },
    tags: ['门户'],
    category: ['Web'],
  }
]

// github projects
export const githubProjects: Array<ProjectItemType> = [
  {
    name: '专注番茄钟',
    description: '一个还挺好看的番茄钟',
    link: { href: 'https://github.com/carreypro/zhuanzhufanqie', label: '专注番茄钟' },
    logo: 'github',
    gitStars: 1,
    gitForks: 1,
    category: ['Tool'],
    techStack: ['TypeScript', 'React', 'TailwindCSS'],
  },
]

// all projects combined
export const allProjects = [...featuredProjects, ...githubProjects]