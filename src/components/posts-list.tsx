import Link from 'next/link'
import React from 'react'

export default async function PostList() {

    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch('https://dummyjson.com/posts?limit=10')
    const data = await response.json()

  return (
        <ul>
            {
                data.posts?.map((post: { id: React.Key | null | undefined; title: string }) => (
                    <li key={post.id} className='mb-4'>
                        <Link href={`/posts/${post.id}`} className='text-zinc-900 hover:underline transition-all'>{post.title}</Link>
                    </li>
                ))
            }
        </ul>
  )
}
