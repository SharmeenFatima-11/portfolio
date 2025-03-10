import React, { useState } from 'react';

const Carousal = ({imageData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex justify-center items-center w-full py-3 border border-gray2 rounded-lg">
  {/* Display the current image */}
  <div className='flex flex-col'>
  <div className="flex justify-center items-center w-full h-80">
    <img
      src={imageData[currentIndex].url}
      alt={imageData[currentIndex].fileName}
      className="object-contain w-full h-full rounded-lg"
    />
  </div>
  <p className='ml-1 text-center'>{imageData[currentIndex].fileName}</p>
  </div>


      {/* Left and Right Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-gray2 text-xl p-2 rounded-full border-gray2 hover:bg-gray-600"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-gray2 text-xl p-2 rounded-full border-gray2 hover:bg-gray-600"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousal;
