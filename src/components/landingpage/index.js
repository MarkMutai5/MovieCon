import { getGenreList, getMovies, getTrending } from '@/Redux/Slices/movies';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Cta from '../cta'
import Navbar from '../Navbar'

const LandingPage = () => {
  

  return (
    <div > 
        <div className='h-screen bg-center bg-cover' 
        style={{backgroundImage: `url('/static/KE-en-20230320-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`, 
        backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
        >
            <Navbar />
            <Cta />
        </div>
        
    </div>
  )
}

export default LandingPage