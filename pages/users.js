import React from 'react'
import User from '@/components/user';

export default function UserList({data}) {
  return (
    <>
        <h1>UserList</h1>
        {data.map((user)=>{
                return(
                    <div key={user.id}>
                        <p>{user.name}</p>
                      <User user={user}/>
                    </div>
                )
            })}
    </>
  )
}


export async function getStaticProps(){

    const response = await fetch('http://jsonplaceholder.typicode.com/users');

    const data = await response.json();
    // console.log(data)


    return{
        props:{
            data:data

        }
    }
}