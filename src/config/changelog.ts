// changelog
export const changelogHeadLine = "What's new about this site"
export const changelogIntro = "Check out the latest changes to this site."


// changelog
export type ChangelogItemType = {
  date: string
  content: Array<{
    title: string
    description: string
    divider?: boolean
  }>
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2024-12-27',
    content: [
      {
        title: '🎨 Project Showcase Update',
        description: 'Enhanced project cards and added Maoxiu platform logo.',
        divider: true
      },
      {
        title: '📡 RSS Feed Optimization',
        description: 'Added support for multiple subscription formats.'
      }
    ]
  },
  {
    date: '2024-12-25',
    content: [
      {
        title: '👤 Personal Info Update',
        description: 'Updated profile, career info and social links.',
        divider: true
      },
      {
        title: '🔄 GitHub Settings Update',
        description: 'Updated GitHub username and repository settings.'
      }
    ]
  },
  {
    date: '2024-12-24',
    content: [
      {
        title: '📦 Resources Page Added',
        description: 'Added a new page for development tools and resources.'
      }
    ]
  },
  {
    date: '2024-12-23',
    content: [
      {
        title: '💡 Project Launch',
        description: 'Initial project setup and deployment.'
      }
    ]
  }
]