import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ActiveLink({ name, href }) {
  const { pathname: urlPathname, push: routerPush  } = useRouter();


  const style = {
    backgroundColor: urlPathname === href ? 'var(--color-alt)' : '',
  }

  const handleClick = e => {
    e.preventDefault()
    routerPush(href)
  }

  return (
    <Link href={href}>
      <a onClick={handleClick} className={urlPathname === href ? 'active' : ''}> 
        {name} 
      </a>
    </Link> 

  )
}