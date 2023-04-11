import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, CSSProperties } from 'react'

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}
interface IProps {
  text: string
  href: string
}

export const CustomActiveLink: FC<IProps> = ({ text, href }: IProps) => {
  const { asPath } = useRouter()
  return (
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  )
}
