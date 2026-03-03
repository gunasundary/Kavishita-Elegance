import { useContext, useState } from "react";
import { CartContext } from "../context/cartcontext";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handlePlaceOrder = () => {
    // Fake order placement
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Order Placed Successfully 🎉
        </h1>
        <p className="mt-4">Thank you for shopping with Kavishita Elegance</p>
      </div>
    );
  }

  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      
      {/* SHIPPING FORM */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>

        <input className="border p-2 w-full mb-3" placeholder="Full Name" />
        <input className="border p-2 w-full mb-3" placeholder="Email" />
        <input className="border p-2 w-full mb-3" placeholder="Address" />
        <input className="border p-2 w-full mb-3" placeholder="City" />
        <input className="border p-2 w-full mb-3" placeholder="Pincode" />
      </div>

      {/* ORDER SUMMARY */}
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        {cart.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} × {item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}

        <hr className="my-3" />

        <p className="font-bold">Total: ₹{totalAmount}</p>

        <button
          onClick={handlePlaceOrder}
          className="mt-4 w-full bg-black text-white py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;