import { GithubLogo } from '../icons/GithubLogo'
import { MaoxiuLogo } from '../icons/MaoxiuLogo'

type LogoProps = {
  type: 'github' | 'maoxiu'
  className?: string
}

export const Logo = ({ type, className = '' }: LogoProps) => {
  switch (type) {
    case 'github':
      return <GithubLogo className={className} />
    case 'maoxiu':
      return <MaoxiuLogo className={className} />
    default:
      return null
  }
} 