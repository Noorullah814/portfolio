import React from 'react'

import Left from './Left'
import Right from './Right'

const Home = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center my-8 gap-3 md:gap-8 px-4 sm:px-5 md:px-7 md:my-12 lg:px-10 py-10 md:py-16 lg:py-10'>
       <Left/>
       <Right/>
    </div>
  )
}

export default Home