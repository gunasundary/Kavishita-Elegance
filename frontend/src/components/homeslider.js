import { useEffect, useState } from "react";
import slider1 from "../assets/slider4.webp";
import slider2 from "../assets/slider5.webp";
import slider3 from "../assets/slider3.webp";

function HomeSlider() {
  const images = [slider1, slider2, slider3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <img
        src={images[current]}
        alt="slider"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeSlider;