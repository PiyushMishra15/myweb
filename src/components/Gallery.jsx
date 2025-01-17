'use client'
// src/components/Gallery.jsx
import React from 'react';

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
  return (
    <div className="gallery-container py-20">
      <h2 className="text-4xl font-black text-center text-purple-500 mb-10">GALLERY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {images.map((src, index) => (
          <div key={index} className="group relative">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105 group-hover:border-4 group-hover:border-purple-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;