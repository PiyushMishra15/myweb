
import DomainCard from '../../src/components/DomainCard';
import Gallery from '../../src/components/Gallery';

const domains = [
  {
    title: 'Web Development',
    description: 'Building responsive and dynamic websites.',
    image: '/web-development.jpg',
    isWebDev: true,
  },
  {
    title: 'Machine Learning',
    description: 'Creating intelligent systems that learn and adapt.',
    image: '/machine-learning.jpg',
    isMachineLearning: true,
  },
  {
    title: 'AR/VR',
    description: 'Exploring augmented and virtual reality technologies.',
    image: '/ar-vr.jpg',
    isArVr: true,
  },
  {
    title: 'Video Editing',
    description: 'Crafting compelling video content with professional editing techniques.',
    image: '/video-editing.jpg',
    isVideoEditing: true,
  },
  {
    title: 'Graphic Design',
    description: 'Creating visually appealing designs for various media.',
    image: '/graphic-design.jpg',
    isGraphicDesign: true,
  },
  {
    title: 'Competitive Programming',
    description: 'Solving challenging problems and competing in programming contests.',
    image: '/competitive-programming.jpg',
    isCompetitiveProgramming: true,
  },
];

const coordinators = [
  {
    name: 'TP Sharma',
    role: 'Faculty Incharge',
    image: '/tpsharma.png',
    linkedin: 'https://www.linkedin.com/in/tp-sharma-253a0039/?originalSubdomain=in',
  },
  {
    name: 'Somendra Aggarwal',
    role: 'Club Coordinator',
    image: 'https://res.cloudinary.com/dwwajleyo/image/upload/v1709371192/membersexe%402024/somendra_anjalj_p6zxyq.jpg',
    linkedin: 'https://www.linkedin.com/in/somendraaggarwal11',
  },
  {
    name: 'Mansi Joshi',
    role: 'Club Coordinator',
    image: 'https://res.cloudinary.com/dwwajleyo/image/upload/v1711644927/membersexe%402024/mansi_ikkv2u.jpg',
    linkedin: 'https://www.linkedin.com/in/mansi-joshi-68b709269/',
  },
];
const CoordinatorCard = ({ name, role, image, linkedin, index }) => (
<a 
  href={linkedin} 
  target="_blank" 
  rel="noopener noreferrer" 
  className={`coordinator-card w-full md:w-4/5 mb-8 mx-auto flex items-center ${
    index % 2 === 0 ? 'zigzag-left' : 'zigzag-right'
  }`}
>
  <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-transparent hover:bg-gray-800/30 p-6 flex flex-col sm:flex-row items-center space-x-6">
    {/* Image */}
    <img 
      src={image} 
      alt={name} 
      className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 flex-shrink-0"
    />
    {/* Text Content */}
    <div className="text-content text-white">
      <h3 className="text-3xl fontdiner-swanky-regular text-purple-500">{name}</h3>
      <p className="text-xl text-gray-300">{role}</p>
    </div>
  </div>
</a>
);


export default function Page() {
  return (
    
    <>
 
      <div className='relative min-h-screen bg-gray-900 text-gray-200 font-sans'>
        {/* Video Section */}
        <div className="relative z-10">
  {/* Container with gradient background */}
  <div className="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-black  to-black">
    {/* Video */}
    <video
      className="absolute object-contain w-full h-auto max-w-none sm:max-w-[90%] md:max-w-[70%] lg:max-w-full"
      src="/main.mov"
      autoPlay
      muted
<<<<<<< HEAD
    
=======
>>>>>>> a51b85ead144d2b7e3ff43015226303063cc989d
      title="Your Video Title"
    />
            <div className='absolute inset-0 flex items-center justify-center'>
              <h1 className='text-6xl font-bold text-white fontdiner-swanky-regular'></h1>
            </div>
          </div>
        </div>

        {/* Domains Section - Added bg-dark-blue */}
        <div className="relative z-10 text-white bg-dark-blue">
          <div className="flex flex-col items-center text-center text-purple-500 fontdiner-swanky-regular text-4xl px-4 pt-20">
            OUR DOMAINS
          </div>
          <div className="flex flex-wrap justify-center font-semibold">
            {domains.map((domain, index) => (
              <DomainCard 
                key={index}
                title={domain.title}
                description={domain.description}
                image={domain.image}
                isWebDev={domain.isWebDev}
                isMachineLearning={domain.isMachineLearning}
                isArVr={domain.isArVr}
                isVideoEditing={domain.isVideoEditing}
                isGraphicDesign={domain.isGraphicDesign}
                isCompetitiveProgramming={domain.isCompetitiveProgramming}
              />
            ))}
          </div>
        </div>
       
        <div className="relative z-10 text-white pt-20 bg-dark-blue"> {/* Apply the new background color class */}
          <Gallery /> {/* Add Gallery component */}
        </div>
        <div className="relative z-10 text-white pt-20 bg-dark-blue" data-aos="fade-up">
  <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
    <h2 className="text-4xl fontdiner-swanky-regular text-purple-500">CO-ORDINATORS</h2>
  </div>
  <div className="max-w-6xl mx-auto px-4 mr-20 " >
    {coordinators.map((coordinator, index) => (
      <CoordinatorCard
        key={index}
        index={index}
        name={coordinator.name}
        role={coordinator.role}
        image={coordinator.image}
        linkedin={coordinator.linkedin}
      />
    ))}
  </div>
</div>
      </div>
    </>
  );
}