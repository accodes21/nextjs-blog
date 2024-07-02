import { createPost } from '@/actions/action'
import React from 'react'

export default function page() {
  return (
    <main className="text-center pt-16 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
        <form action={createPost} className='h-10 mt-10 space-x-2'>
            <input 
            type="text" 
            name='title'
            placeholder='Title for new post'
            className='border rounded h-full px-3'
            />
            <button className='h-full bg-blue-600 text-white px-3 rounded'>Submit</button>
        </form>
    </main>
  )
}
