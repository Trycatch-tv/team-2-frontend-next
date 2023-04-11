import Link from 'next/link'
import { useRouter } from 'next/router'

const style = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const CustomActiveLink = ({ text, href }) => {
  const { asPath } = useRouter()
  return (
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  )
}
