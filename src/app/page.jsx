import Squares from '../../Squares/Squares';
import BlurText from '../../BlurText/BlurText';
import DecryptedText from '../../DecryptedText/DecryptedText';
import Header from '../../src/components/Header'; // Import Header component

export default function Page() {
  return (
    <>
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
      <div className='relative z-10 text-white pt-20'> {/* Add padding to the top */}
        <div className='flex items-center justify-center h-screen'>
          <video 
            className='absolute top-0 left-0 w-full h-full object-cover' 
            src='/01081_1.mp4' // Corrected path
            autoPlay 
            muted 
            title='Your Video Title' // Add title attribute
          />
        </div>
      </div>
      <div className='relative z-10 text-white pt-20'> 
        <div className='flex text-center text-orange-500 items-center justify-center font-extrabold text-4xl '>About Our Team</div>
        <p className='flex  p-20 ml-60  font-semibold md:w-4/6 text-center text-2xl'>
          We are a group of passionate individuals united by
          a shared commitment to delivering excellence in every 
          aspect of our work. With a blend of creativity, expertise,
          and dedication, we strive to exceed expectations and make a 
          meaningful impact in everything we do. Our diverse team brings
          together a wealth of knowledge, skills, and perspectives, allowing
        </p>
      </div>
    </div>
    </>
  );
}