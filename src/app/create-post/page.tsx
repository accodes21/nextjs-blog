"use client"
import React from 'react';
import SignIn from '@/firebase/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import SignOut from '@/firebase/SignOut';
import { createPost } from '@/actions/action';

export default function Page() {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <main className="text-center pt-16 px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
          <form action={createPost} className='max-w-[400px] mx-auto my-10 gap-2 flex flex-col'>
            <input 
              type="text" 
              name='title'
              placeholder='Title for new post'
              className='border rounded-md h-10 px-3'
              required
            />
            <textarea 
              name="body"
              placeholder='Body for new post'
              className='border rounded-md px-3 py-2'
              rows={7}
              required
            />
            <button className='h-10 bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 rounded-md'>Submit</button>
          </form>
          <SignOut/>
        </main>
      ) : (
        <SignIn />
      )}
    </>
  );
}
