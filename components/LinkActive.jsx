import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ActiveLink({ name, href }) {
  const { pathname: urlPathname, push: routerPush  } = useRouter();

  console.log(href);

  const style = {
    backgroundColor: urlPathname === href ? 'red' : 'black',
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link href={href}>
      <a style={{style}} onClick={handleClick}> 
        {name} 
      </a>
    </Link> 

  )
}