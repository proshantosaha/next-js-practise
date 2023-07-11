import Link from "next/link"
import { useRouter } from "next/router"


export default function index() {
  const route = useRouter()

  const handleClick = () =>{
    route.replace('/product')
  }
  return (
    <div>
      <h2>Home</h2>
     
      <Link legacyBehavior href='/users'>
        <a>Users</a>
      </Link>

      <Link legacyBehavior href='/posts'>
        <a>posts</a>
      </Link>

      

      <Link legacyBehavior href='/blog'>
        <a>Blog</a>
      </Link>


      
      <Link legacyBehavior href='/product'>
        <a>Product</a>
      </Link>

      <button onClick={handleClick}>place order</button>
    </div>
  )
}

