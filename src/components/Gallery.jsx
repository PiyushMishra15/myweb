'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/i1.png',
  '/i2.png',
  '/i3.png',
  '/i4.png',
  '/i5.png',
  '/i6.png',
  '/i7.png',
  '/i8.png',
  '/i10.png',
  '/i11.png',
  '/i12.png',
];

const Gallery = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMainImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container py-20 relative">
      <h2 className="text-4xl font-black text-center text-purple-500 mb-10">GALLERY</h2>
      <div className="main-image-container flex justify-center mb-10 relative">
        <Image
          src={images[mainImageIndex]}
          alt={`Gallery Image ${mainImageIndex + 1}`}
          width={1200}
          height={800}
          className="main-image w-full h-[600px] object-contain rounded-lg shadow-lg transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default Gallery;