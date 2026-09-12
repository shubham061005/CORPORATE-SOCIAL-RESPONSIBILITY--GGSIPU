import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";

const images = [
  {
    src: "Event-5.jpg",
    alt: "Cleanliness Drive 2026",
  },
   {
    src: "csr-clean_drive-2.jpg",
    alt: "Cleanliness Drive 2026",
  },
  {
    src: "event-01.png",
    alt: "CSR Bootcamp & Donation Drive",
  },
  {
    src: "event-02.png",
    alt: "Slide 2",
  },
  {
    src: "event-03.png.jpg",
    alt: "Slide 3",
  },
  {
    src: "event-04.png",
    alt: "Slide 4",
  },
];

const events = [
  {
    image: "Event-5.jpg",
    title: "Cleanliness Drive",
    description:
      "The Cleanliness Drive was organized near Surajmal Park on 10th April 2026. Volunteers came together to promote cleanliness, environmental awareness, and responsible community participation. The initiative reflected our commitment to creating a cleaner and healthier surroundings.",
    date: "April 10, 2026",
  },

  {
    image: "event-01.png",
    title: "CSR Bootcamp & Donation Drive",
    description:
      "The CSR Bootcamp & Donation Drive event was a beautiful testament to the power of community and selfless service. Volunteers united with a shared purpose, dedicating their time and energy to meaningful causes.",
    date: "March 7, 2024",
  },
];

const EventPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? images.length - 1
      : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="min-h-screen text-white select-none font-poppins"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container mx-auto p-2 sm:p-4 md:p-6">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8">
          Events
        </h1>

       {/* Carousel */}
<div className="relative bg-custom-color p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-12">

  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.7 }}
      className="w-full flex items-center justify-center overflow-hidden rounded-lg"
    >
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
      />
    </motion.div>
  </AnimatePresence>

  {/* Left Arrow */}
  <button
    onClick={goToPrevious}
    className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 
               bg-bg-color text-white rounded-full p-2 md:p-3 
               shadow-md hover:bg-gray-600 transition-all z-10"
  >
    &#9664;
  </button>

  {/* Right Arrow */}
  <button
    onClick={goToNext}
    className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 
               bg-bg-color text-white rounded-full p-2 md:p-3 
               shadow-md hover:bg-gray-600 transition-all z-10"
  >
    &#9654;
  </button>

  {/* Navigation Dots */}
  <div className="flex justify-center space-x-2 md:space-x-3 mt-4">
    {images.map((_, index) => (
      <motion.button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
          currentIndex === index
            ? "bg-blue-500 scale-125 shadow-lg"
            : "bg-gray-400 hover:bg-blue-400"
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
    ))}
  </div>

</div>
      {/* Event Cards */}
<div className="flex justify-center px-2 sm:px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">

    {events.map((event, index) => (
      <motion.div
        key={index}
        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-full h-[300px] sm:h-[350px]">

          {/* Event Image */}
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {event.title}
            </h2>

            <p className="text-sm text-gray-300 mb-4">
              {event.description}
            </p>

            <p className="text-sm font-semibold text-gray-300">
              📅 {event.date}
            </p>

            {event.location && (
              <p className="text-sm font-semibold text-gray-300 mt-2">
                📍 {event.location}
              </p>
            )}

          </div>
        </div>
      </motion.div>
    ))}

  </div>
</div>

      </div>
    </div>
  );
};

export default EventPage;