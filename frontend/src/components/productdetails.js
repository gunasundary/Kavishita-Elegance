import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Navbar from "../components/navbar";
import { CartContext } from "../context/cartcontext";
import { API_URL } from "../api";
import { useNavigate } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();
  console.log("Product ID from URL:", id);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

    async function fetchProduct() {
      try {
        const res = await fetch(`${API_URL}/products/${id}`);
        const data = await res.json();

        console.log("Product fetched:", data);

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();

  }, [id]);

  if (!product) {
    return <p className="mt-28 text-center">Loading...</p>;
  }

  const increment = () => setQuantity(quantity + 1);

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };
  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate("/checkout");
  };

  return (
    <>
      <Navbar />

      <div className="px-6 md:px-16 mt-28 grid md:grid-cols-2 gap-12">

        <img
          src={`${API_URL.replace("/api", "")}/${product.images[0]}`}
          alt={product.name}
          className="w-full h-[450px] object-cover rounded-lg shadow"
        />

        <div>

          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-xl text-gray-600 mt-3">
            ₹ {product.price}
          </p>

          <p className="mt-4 text-gray-700">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-6">

            <span className="font-semibold">Quantity:</span>

            <div className="flex border rounded">

              <button
                onClick={decrement}
                className="px-4 py-2"
              >
                -
              </button>

              <span className="px-6 py-2">{quantity}</span>

              <button
                onClick={increment}
                className="px-4 py-2"
              >
                +
              </button>

            </div>

          </div>

          <div className="flex gap-4 mt-8">

            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-3 rounded"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="border px-6 py-3 rounded"
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