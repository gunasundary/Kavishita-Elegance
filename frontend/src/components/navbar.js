import { useState, useContext } from "react";            // ✅ UPDATED
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/cartcontext";   // ✅ NEW
import Kavishita from "../assets/Kavishita.png";
import {
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("userInfo"));

  const { toggleCart } = useContext(CartContext);     

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?search=${search}`);
      setSearch("");
      setMenuOpen(false);
    }
  };
  const handleUserClick = () => {
  if (user) {
    navigate("/profile"); // later
  } else {
    navigate("/login");   // ✅ THIS OPENS LOGIN
  }
  setMenuOpen(false);
};

  return (
    <div className="fixed top-0 w-full z-50 bg-white">
      {/* MAIN BAR */}
      <div className="flex items-center justify-between h-20 px-4 md:px-8">
        
        {/* LOGO */}
        <Link to="/">
          <img src={Kavishita} alt="Kavishita Logo" className="w-24 md:w-28" />
        </Link>

        {/* SEARCH – Desktop */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center border rounded-full px-4 py-2 w-1/3"
        >
          <input
            type="text"
            placeholder="Search jewellery..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none text-sm"
          />
          <FaSearch className="text-gray-500" />
        </form>

        {/* RIGHT ICONS – Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/new">New Arrivals</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          {/* CART BUTTON (NO NAVIGATION) */}
          <button onClick={toggleCart}>
            <FaShoppingCart className="text-xl" />
          </button>

          <FaHeart className="text-xl" />
         <FaUser
    className="text-xl cursor-pointer"
    onClick={handleUserClick}
  />
        </div>

        {/* HAMBURGER – Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          
          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center border rounded-full px-4 py-2"
          >
            <input
              type="text"
              placeholder="Search jewellery..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none text-sm"
            />
            <FaSearch className="text-gray-500" />
          </form>

          {/* Links */}
          <Link onClick={() => setMenuOpen(false)} to="/" className="block">
            Home
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/products" className="block">
            Shop
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/new" className="block">
            New Arrivals
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="block">
            About Us
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className="block">
            Contact Us
          </Link>

          {/* Icons */}
          <div className="flex gap-6 pt-2">
            {/* CART BUTTON (NO NAVIGATION) */}
            <button
              onClick={() => {
                toggleCart();
                setMenuOpen(false);
              }}
            >
              <FaShoppingCart className="text-xl" />
            </button>

            <FaHeart className="text-xl" />
          <FaUser
    className="text-xl cursor-pointer"
    onClick={handleUserClick}
  />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;