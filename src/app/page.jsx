import React from 'react'
import Squares from '../../Squares/Squares';
import BlurText from '../../BlurText/BlurText';
export default function Page() {
  return (
    <div className='relative min-h-screen bg-gray-900'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#000000' // Black color
          hoverFillColor='slate' // Gray color
        />
      </div>
      {/*content*/}
      <div className='relative z-10 text-white '>
        <h1 className='text-4xl font-bold text-center items-center justify-center flex h-screen'>
          <BlurText 
           text="TEAM .EXE"
           delay={150}
           animateBy="words"
           direction="top"
           className="text-7xl mb-8"/>
        </h1>
      </div>
    </div>
  );
}
