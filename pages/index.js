import Link from "next/link"

export default function index() {
  return (
    <div>
      <h2>Home</h2>
     


      <Link legacyBehavior href='/blog'>
        <a>Blog</a>
      </Link>


      
      <Link legacyBehavior href='/product'>
        <a>Product</a>
      </Link>
    </div>
  )
}

