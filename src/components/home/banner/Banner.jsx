
import { useEffect, useState } from 'react';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: 'https://via.placeholder.com/800x400?text=Slide+1', text: 'Slide 1' },
    { url: 'https://via.placeholder.com/800x400?text=Slide+2', text: 'Slide 2' },
    { url: 'https://via.placeholder.com/800x400?text=Slide+3', text: 'Slide 3' },
    { url: 'https://via.placeholder.com/800x400?text=Slide+4', text: 'Slide 4' },
    { url: 'https://via.placeholder.com/800x400?text=Slide+5', text: 'Slide 5' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            <div className="relative w-full h-64 md:h-96">
              <img src={slide.url} alt={`Slide ${index + 1}`} className="absolute inset-0 object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h2 className="text-2xl font-bold text-white">{slide.text}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;