import Squares from '../../Squares/Squares';
import DomainCard from '../../src/components/DomainCard'; // Import DomainCard component
import Gallery from '../../src/components/Gallery'; // Import Gallery component

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
    image: '/tp-sharma.jpg',
    linkedin: 'https://www.linkedin.com/in/tp-sharma',
  },
  {
    name: 'Somendra Aggarwal',
    role: 'Club Coordinator',
    image: '/somendra-aggarwal.jpg',
    linkedin: 'https://www.linkedin.com/in/somendra-aggarwal',
  },
  {
    name: 'Mansi Joshi',
    role: 'Club Coordinator',
    image: '/mansi-joshi.jpg',
    linkedin: 'https://www.linkedin.com/in/mansi-joshi',
  },
];

const CoordinatorCard = ({ name, role, image, linkedin }) => (
  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="coordinator-card group w-full mb-8">
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-gray-800 bg-opacity-50 p-6 flex items-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mr-6" />
      <div className="text-white">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-lg">{role}</p>
      </div>
    </div>
  </a>
);

export default function Page() {
  return (
    <>
      <div className='relative min-h-screen bg-gray-900 text-gray-200 font-sans'>
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
        {/*<div className="relative z-10 text-white pt-20 bg-dark-blue"> 
          <div className="flex flex-col items-center text-center text-purple-500 font-extrabold text-4xl px-4">
            About Our Team
          </div>
          <p className="flex flex-col p-4 md:p-10 font-semibold text-center text-lg md:text-2xl md:max-w-screen-md mx-auto">
            We are a group of passionate individuals united by a shared commitment to delivering excellence in every aspect of our work. 
            With a blend of creativity, expertise, and dedication, we strive to exceed expectations and make a meaningful impact in everything we do. 
            Our diverse team brings together a wealth of knowledge, skills, and perspectives.
          </p>
        </div>*/}
        <div className="relative z-10 text-white pt-20 bg-dark-blue"> {/* Apply the new background color class */}
          <div className="flex flex-col items-center text-center text-purple-500 font-extrabold text-4xl px-4">
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
        <div className="relative z-10 text-white pt-20 bg-dark-blue"> {/* Apply the new background color class */}
          <div className="flex flex-col items-center text-center text-purple-500 font-extrabold text-4xl px-4">
            CO-ORDINATORS
          </div>
          <div className="flex flex-wrap justify-center">
            {coordinators.map((coordinator, index) => (
              <CoordinatorCard
                key={index}
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