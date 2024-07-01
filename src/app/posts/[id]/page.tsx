import React, { Suspense } from 'react'

const Post = async({params} : {params: {id : string}}) => {

    const response = await fetch(`https://dummyjson.com/posts/${params.id}`)
    const post = await response.json()

  return (
        <main className="text-center pt-32 px-5">
            <h1 className="text-4xl md:text-5xl font-semibold mb-5">{post.title}</h1>
            <p className='max-w-[700px] mx-auto'>{post.body}</p>
        </main>
  )
}

const Loading = () => {
    return (
        <main className="text-center pt-32 px-5">
            <h1 className="text-4xl md:text-5xl font-semibold mb-5">Loading...</h1>
        </main>
    );
};

export default function page({params} : {params: {id : string}}) {
    return (
        <Suspense fallback={<Loading/>}>
            <Post params={params}/>
        </Suspense>
    )
}