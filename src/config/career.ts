// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const careerList: Array<CareerItemType> = [
    {
      company: 'A Major Internet Company',
      title: 'Product Manager',
      logo: 'bank',
      start: '2023',
      end: '2024'
    },
  ]