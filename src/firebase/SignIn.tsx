import React from 'react';
import { signInWithGoogle } from '@/firebase/firebase';

export default function SignIn() {
  return (
    <div className='text-center pt-16 px-5'>
      <button className='sign-out' onClick={signInWithGoogle}>Sign in with Google</button>
      <p className='sign-p'>Sign in to create post with title and body.</p>
    </div>
  );
}
