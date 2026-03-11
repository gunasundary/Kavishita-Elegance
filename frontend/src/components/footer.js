import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#7a4a2e] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Kavishita Elegance</h2>
          <p className="text-sm text-gray-200">
            Discover timeless jewelry crafted with elegance and passion.
            Our designs bring luxury and beauty to every occasion.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-200 cursor-pointer">Necklaces</li>
            <li className="hover:text-gray-200 cursor-pointer">Rings</li>
            <li className="hover:text-gray-200 cursor-pointer">Earrings</li>
            <li className="hover:text-gray-200 cursor-pointer">Bracelets</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-200 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-200 cursor-pointer">FAQs</li>
            <li className="hover:text-gray-200 cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-gray-200 cursor-pointer">Order Tracking</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <FaInstagram className="cursor-pointer hover:text-gray-200" />
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaTwitter className="cursor-pointer hover:text-gray-200" />
          </div>

          <p className="text-sm mt-4 text-gray-200">
            Stay connected for new arrivals and exclusive offers.
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 text-center py-4 text-sm">
        © {new Date().getFullYear()} Kavishita Elegance. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;