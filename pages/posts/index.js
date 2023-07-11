import Link from "next/link";

export default function PostData({posts}) {
  return (
    <>PostData
        {posts.map((post)=>{
                return(
                    <div key={post.id} >
                        <Link legacyBehavior href={`posts/${post.id}`} passHref>
                            <h1>{post.id}{post.title}</h1>
                        </Link>

                       
                    </div>
                )
            })
        }
    </>
  )
}


export async function getStaticProps(){
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');

    const data = await response.json()
    // console.log(data)

    return { 

        props:{
            posts:data.slice(0,3),
        }
    }

}
