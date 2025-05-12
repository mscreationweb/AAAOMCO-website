import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes, FaPencilAlt, FaExpand } from "react-icons/fa";

const images = [
  "/images/allimg/homepage/7.jpg",
  "/images/allimg/homepage/8.jpg",
  "/images/allimg/homepage/9.jpg",
  "/images/allimg/homepage/10.jpg",
];

const ImageGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  // Open image in modal
  const openImage = (index) => setCurrentIndex(index);
  // Close image modal
  const closeImage = () => setCurrentIndex(null);
  // Show previous image
  const showPrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  // Show next image
  const showNext = () =>
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 p-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full h-50 overflow-hidden cursor-pointer group"
            onClick={() => openImage(idx)}
          >
            <img
              src={src}
              alt={`img-${idx}`}
              className="w-full h-full object-cover  transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay tint and icons */}
            <div className="absolute inset-0 bg-[#FD9F00] bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
              {/* <FaPencilAlt className="text-white text-xl" /> */}
              <FaExpand className="text-white text-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-28 right-4 bg-white text-black p-2 rounded-full hover:bg-[#FD9F00] hover:text-white transition z-[10000]"
            onClick={closeImage}
          >
            <FaTimes size={20} />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-4 text-white text-3xl z-[10000]"
            onClick={showPrev}
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt={`large-img-${currentIndex}`}
            className="max-w-[90%] max-h-[60%] rounded shadow-lg z-[9998]"
          />

          {/* Next Button */}
          <button
            className="absolute right-4 text-white text-3xl z-[10000]"
            onClick={showNext}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default ImageGrid;
