import { useRouter } from 'next/router'
import React from 'react'

const Cta = () => {
  const router = useRouter()

  return (
    <div className='flex text-center justify-center pt-52 flex-col space-y-8'>
        <h1 className='text-white text-5xl'>Unlimited movies, TV shows, and more.</h1>
        <p className='text-white text-3xl'>Watch anywhere. Cancel anytime.</p>
        <p className='text-white text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>

        <div className='justify-between space-x-2'>
            <input 
                type={'email'}
                className = "w-96 p-4 rounded-md"
                placeholder='Email Address'
            />
            <button className='bg-red text-white px-8 rounded-md py-4' onClick={() => router.push('/catalogue')}>Get Started</button>
        </div>
    </div>
  )
}

export default Cta