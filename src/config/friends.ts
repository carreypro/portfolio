// friends
export const friendsHeadLine = "My Friends"
export const friendsIntro = "Meet someone interesting."

export type FriendType = {
  name: string
  avatar: string
  link: string
  description?: string
}

export const friends: Array<FriendType> = [
  {
    name: 'Corey Chiu',
    avatar: 'https://coreychiu.com/favicon.ico',
    link: 'https://coreychiu.com/',
    description: 'Product Manager & AI Developer'
  }
]