// components/ImageGrid.tsx
"use client";
import React, { useState } from 'react';

const ImageGrid: React.FC = () => {
  const [images, setImages] = useState<(string | null)[]>([null, null, null, null]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).slice(0, 4);
    const newImages = files.map((file) => URL.createObjectURL(file));
    console.log("Loaded images:", newImages);  // Debug log
    setImages(newImages);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => document.getElementById('imageInput')?.click()}
      >
        Select Images
      </button>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="hidden"
      />
      <div className="grid grid-cols-2 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-[400px] h-[400px]">
            {image ? (
              <img
                src={image}
                alt={`Selected ${index}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
