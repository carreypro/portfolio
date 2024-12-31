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
  
// projects 
export const projects: Array<ProjectItemType> = [
  {
    name: '永劫无间系列',
    description: '24 Entertainment工作室开发的多人动作竞技游戏',
    link: { href: 'https://www.yjwujian.cn/index.html', label: '永劫无间' },
    tags: ['官网', '游戏'],
  },
  {
    name: '猫修APP',
    description: '游戏社区',
    link: { href: 'https://www.lmaoyx.com/app', label: '猫修APP' },
    tags: ['APP', '游戏社区'],
    logo: 'maoxiu',
  },
  {
    name: '猫修平台',
    description: '汉化和修改器平台',
    link: { href: 'https://www.lmaoyx.com', label: '猫修平台' },
    tags: ['汉化', '修改器', '游戏'],
    logo: 'maoxiu',
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
    techStack: ['TypeScript', 'React', 'TailwindCSS'],
  },
]