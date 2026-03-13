import Kavishita from "../assets/Kavishita.png";
// import { Link } from "react-router-dom";
import Navbar from "./navbar";

function About() {
  return (
    <>
    <Navbar/>
    <div className="mt-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <img
          src={Kavishita}
          alt="Kavishita Logo"
          className="mx-auto w-40 mb-4"
        />
        
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="text-gray-600 mt-2">
          Elegance crafted with tradition & love
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Kavishita is a premium jewellery brand inspired by timeless
            traditions and modern elegance. Each piece is thoughtfully
            designed to celebrate beauty, culture, and individuality.
          </p>

          <p>
            From antique necklaces to contemporary designs, our collections
            are crafted with precision and passion. We believe jewellery is
            not just an accessory, but a reflection of your story.
          </p>

          <p>
            Our mission is to deliver authentic, high-quality jewellery that
            blends heritage with modern fashion — making every moment special.
          </p>
        </div>

        {/* Image / Highlight Card */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3 text-gray-700">
            <li>✨ Handcrafted premium designs</li>
            <li>💎 High-quality materials</li>
            <li>🛍️ Curated collections</li>
            <li>❤️ Customer-first approach</li>
          </ul>
        </div>
      </div>
     
    </div>
    </>
  );
}

export default About;