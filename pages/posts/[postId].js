import React from 'react'

export default function Post({post}) {
  return (
    <div>Post

    <h2>
    {post.id}{post.title}
    </h2>
    <p>{post.body}</p>

    </div>
  )
}




export async function getStaticPaths(){
  return{
    paths:[  
    {
      params:{postId:'1'},
    },
    {
      params:{postId:'2'},
    },
    {
      params:{postId:'3'},
    },
  ],
  fallback:false,
  }
};


export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.postId}`);

    const data = await response.json()

    return {

        props:{
            post:data
        }
    }

}
