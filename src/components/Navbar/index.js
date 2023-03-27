import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {

  const router = useRouter()

  return (
    <div>
        <nav>
            <div className='flex justify-between px-16 pt-4'>
                <button className='text-white bg-red px-4 py-2 rounded-md'>Netflix</button>
                <button className='px-4 py-2 bg-red text-white rounded-md'
                  onClick={() => router.push('/login')}
                >Sign In</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar