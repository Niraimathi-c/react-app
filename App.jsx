// import React from 'react'

// const App = () => {
//   return (
//     <div className='h-[100vh] w-[100%] diplay-flex bg-red-200 relative'>
//      <section className=' h-[100vh] w-[150px] absolute left-2'>
//         <img src="./images/chichen itza.jpg" alt="" className='h-[100vh] w-[300px] hover:scale-105 ' />
   
        
//      </section>
//      <section className='h-[100vh] w-[150px] absolute left-40 '>
//         <img src="./images/christ the reedemer.jpg" alt="" className='h-[100vh] w-[300px]  hover:scale-105' />
        
//      </section>
//      <section className='h-[100vh] w-[150px] absolute left-78 '>
//         <img src="./images/greatwallofchina.jpg" alt="" className='h-[100vh] w-[300px]  hover:scale-105' />
        
//      </section>
//      <section className='h-[100vh] w-[150px] absolute left-116 '>
//         <img src="./images/machu picchu.jpg" alt="" className='h-[100vh] w-[300px]  hover:scale-105' />
        
//      </section>
//      <section className='h-[100vh] w-[150px] absolute left-154 '>
//         <img src="./images/petra.jpg" alt="" className='h-[100vh] w-[300px]  hover:scale-105' />
        
//      </section>
//      <section className='h-[100vh] w-[150px] absolute left-192 '>
//         <img src="./images/tajmahal.jpg" alt="" className='h-[100vh] w-[300px]  hover:scale-105' />
        
//      </section>
//      <section className='h-[100vh] w-[150px] absolute left-230 '>
//         <img src="./images/the colosseum.jpg" alt="" className='h-[100vh] w-[300px]  hover:scale-105' />
        
//      </section>
//      <article className='display-flex justify-center absolute left-290 top-6 right-4 bg-red-100 text-amber-950 font-mono border-8  border-radius-60% hover:scale-105 hover:bg-red-300  '>
//       <p>The Seven Wonders of the World are a list of both ancient and modern man-made structures considered to be architectural marvels and of historical significance. The original list, the "Seven Wonders of the Ancient World," included structures like the Great Pyramid of Giza and the Hanging Gardens of Babylon. A more recent list, often referred to as the "New Seven Wonders of the World," includes the Great Wall of China, Chichén Itzá, Christ the Redeemer, Machu Picchu, Petra, the Colosseum, and the Taj Mahal. </p>
//      </article>
//      <article>
//       <p></p>
//      </article>

     
//     </div>
//   )
// }

// export default App



// import React from 'react';

// const imageData = [
//   {
//     src: './images/chichen itza.jpg',
//     alt: 'Chichén Itzá',
//     description: 'Chichén Itzá: A Mayan pyramid in Mexico known for its precise astronomical alignment.',
//   },
//   {
//     src: './images/christ the reedemer.jpg',
//     alt: 'Christ the Redeemer',
//     description: 'Christ the Redeemer: An iconic statue overlooking Rio de Janeiro, Brazil.',
//   },
//   {
//     src: './images/greatwallofchina.jpg',
//     alt: 'Great Wall of China',
//     description: 'Great Wall of China: A massive wall stretching across northern China, built over centuries.',
//   },
//   {
//     src: './images/machu picchu.jpg',
//     alt: 'Machu Picchu',
//     description: 'Machu Picchu: An ancient Incan citadel in the Andes mountains of Peru.',
//   },
//   {
//     src: './images/petra.jpg',
//     alt: 'Petra',
//     description: 'Petra: A rock-cut city in Jordan famous for its rose-red stone architecture.',
//   },
//   {
//     src: './images/tajmahal.jpg',
//     alt: 'Taj Mahal',
//     description: 'Taj Mahal: A white marble mausoleum in India built by Mughal emperor Shah Jahan.',
//   },
//   {
//     src: './images/the colosseum.jpg',
//     alt: 'The Colosseum',
//     description: 'The Colosseum: An ancient Roman amphitheater in the heart of Rome, Italy.',
//   },
// ];

// const App = () => {
//   return (
//     <div className="h-screen w-full flex flex-wrap justify-start items-start bg-red-200 p-4 gap-4">
//       {imageData.map((img, index) => (
//         <div key={index} className="relative group w-[300px] h-[100vh] overflow-hidden rounded shadow-lg">
//           <img
//             src={img.src}
//             alt={img.alt}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
//             <p className="text-white text-center font-medium">{img.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;


import React from 'react';

const imageData = [
  {
    src: './images/chichen itza.jpg',
    alt: 'Chichén Itzá',
    description: 'Chichén Itzá: A Mayan pyramid in Mexico known for its precise astronomical alignment.',
  },
  {
    src: './images/christ the reedemer.jpg',
    alt: 'Christ the Redeemer',
    description: 'Christ the Redeemer: An iconic statue overlooking Rio de Janeiro, Brazil.',
  },
  {
    src: './images/greatwallofchina.jpg',
    alt: 'Great Wall of China',
    description: 'Great Wall of China: A massive wall stretching across northern China, built over centuries.',
  },
  {
    src: './images/machu picchu.jpg',
    alt: 'Machu Picchu',
    description: 'Machu Picchu: An ancient Incan citadel in the Andes mountains of Peru.',
  },
  {
    src: './images/petra.jpg',
    alt: 'Petra',
    description: 'Petra: A rock-cut city in Jordan famous for its rose-red stone architecture.',
  },
  {
    src: './images/tajmahal.jpg',
    alt: 'Taj Mahal',
    description: 'Taj Mahal: A white marble mausoleum in India built by Mughal emperor Shah Jahan.',
  },
  {
    src: './images/the colosseum.jpg',
    alt: 'The Colosseum',
    description: 'The Colosseum: An ancient Roman amphitheater in the heart of Rome, Italy.',
  },
];

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-wrap justify-center bg-red-200 p-4 gap-6">
      {imageData.map((img, index) => (
        <div
          key={index}
          className="relative group w-[22%] h-[300px] overflow-hidden rounded shadow-lg"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <p className="text-white text-center font-medium">{img.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

