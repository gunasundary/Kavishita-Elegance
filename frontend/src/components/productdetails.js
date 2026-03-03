import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/product";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartcontext";
import Navbar from "../components/navbar";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p className="mt-20 text-center">Product not found</p>;
  }

  // Quantity handlers
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    //navigate("/cart"); // redirect to cart or checkout page
  };
   console.log(addToCart);

  return (
    <>
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="px-6 md:px-16 mt-28 grid md:grid-cols-2 gap-12">
        
        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[450px] object-cover rounded-lg shadow"
        />

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-600 mt-3">
            ₹ {product.price}
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mt-6">
            <span className="font-semibold">Quantity:</span>
            <div className="flex items-center border rounded">
              <button
                onClick={decrement}
                className="px-4 py-2 text-lg hover:bg-gray-100"
              >
                −
              </button>
              <span className="px-6">{quantity}</span>
              <button
                onClick={increment}
                className="px-4 py-2 text-lg hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>
           

            <button
              onClick={handleBuyNow}
              className="border border-black px-6 py-3 rounded hover:bg-black hover:text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;