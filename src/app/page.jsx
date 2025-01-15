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
      <div className="relative z-10 text-white pt-20">
  <div className="flex flex-col items-center text-center text-orange-500 font-extrabold text-4xl px-4">
    About Our Team
  </div>
  <p className="flex flex-col p-4 md:p-10 font-semibold text-center text-lg md:text-2xl md:max-w-screen-md mx-auto">
    We are a group of passionate individuals united by a shared commitment to delivering excellence in every aspect of our work. 
    With a blend of creativity, expertise, and dedication, we strive to exceed expectations and make a meaningful impact in everything we do. 
    Our diverse team brings together a wealth of knowledge, skills, and perspectives.
  </p>
</div>
</div>
    </>
  );
}