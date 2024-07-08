import React from 'react';
import { signInWithGoogle } from '@/firebase/firebase';

export default function SignIn() {
  return (
    <div className='text-center pt-16 px-5'>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Sign in to browse everything about movies and series.</p>
    </div>
  );
}
