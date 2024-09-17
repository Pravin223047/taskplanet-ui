"use client";
import React, { useState } from "react";

const CarouselBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 4;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 relative">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalItems }).map((_, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <div className="w-full h-full rounded-lg shadow-lg">
                <img
                  src={`/CarouselBanner/banner${index + 1}.webp`}
                  alt={`Carousel Item ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrevious}
        className="absolute left-4 xl:-left-14 -bottom-8 xl:top-1/2 transform -translate-y-1/2 bg-rose-800 text-white p-2 h-10 w-10 flex items-center justify-center rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 xl:-right-14 -bottom-8 xl:top-1/2 transform -translate-y-1/2 bg-rose-800 text-white p-2 h-10 w-10 flex items-center justify-center rounded-full"
      >
        &gt;
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
