// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Simon Fraser University',
      major: 'Digital Media Art',
      logo: 'college',
      start: '2018',
      end: '2022'
    },
  ]