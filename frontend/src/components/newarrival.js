

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import new1 from "../assets/new1.jpg"
import new2 from "../assets/new2.jpg"
import new3 from "../assets/new3.webp"
import new4 from "../assets/new4.jpg"


function Newarrivals() {
     const navigate = useNavigate();
  const categories = [
    { id: 1, name: "Necklaces", image: new1 },
    { id: 2, name: "Earrings", image:  new2  },
    { id: 3, name: "Bangles", image: new3 },
    { id: 4, name: "Rings", image:  new4},
  ];

  return (
    <div className="px-6 mt-20">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-8">
     New Arrivals
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
             onClick={() => navigate("/products")} 
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-end justify-center">
              <p className="text-white text-lg mb-4 flex items-center gap-2 group-hover:underline">
                Shop Now <FaArrowRight />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default  Newarrivals;