import { useContext, useState } from "react";
import { CartContext } from "../context/cartcontext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  // State for form fields
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    email: "",
    pincode: "",
  });

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Update form state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Validate email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value) ? "" : "Invalid email format",
      }));
    }

    // Validate pincode
    if (name === "pincode") {
      const pinRegex = /^[0-9]{6}$/;
      setErrors((prev) => ({
        ...prev,
        pincode: pinRegex.test(value) ? "" : "Pincode must be 6 digits",
      }));
    }
  };

  // Check if all fields are filled and valid
  const isFormValid =
    Object.values(form).every((val) => val.trim() !== "") &&
    errors.email === "" &&
    errors.pincode === "";

  const handlePlaceOrder = () => {
    if (!isFormValid) return;
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

  if (cart.length === 0 && !orderPlaced) {
    navigate(-1); // go back to previous page
    return null;
  }

  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {/* SHIPPING FORM */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
        />

        <input
          className="border p-2 w-full mb-1"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        )}

        <input
          className="border p-2 w-full mb-3"
          placeholder="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full mb-3"
          placeholder="City"
          name="city"
          value={form.city}
          onChange={handleChange}
        />

        <input
          className="border p-2 w-full mb-1"
          placeholder="Pincode"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
        />
        {errors.pincode && (
          <p className="text-red-500 text-sm mb-2">{errors.pincode}</p>
        )}
      </div>

      {/* ORDER SUMMARY */}
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} × {item.qty}
            </span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}

        <hr className="my-3" />

        <p className="font-bold">Total: ₹{totalAmount}</p>

        <button
          onClick={handlePlaceOrder}
          disabled={!isFormValid} // Disable button if form invalid
          className={`mt-4 w-full py-2 rounded text-white ${
            isFormValid ? "bg-black" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;