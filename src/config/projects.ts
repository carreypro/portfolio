// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

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
export const projects: Array<ProjectItemType> = []

// github projects
export const githubProjects: Array<ProjectItemType> = [
  {
    name: '个人网站',
    description: '临摹项目',
    link: { href: 'https://github.com/carreypro/portfolio', label: '个人网站' },
    logo: 'github',
    gitStars: 1,
    gitForks: 1,
    techStack: ['Next.js', 'TailwindCSS', 'TypeScript'],
  },
]