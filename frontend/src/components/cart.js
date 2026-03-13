import { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import Kavishita from "../assets/Kavishita.png";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    //cart,
    isCartOpen,
    toggleCart,
    // addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const { cart, closeCart } = useContext(CartContext);


  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleCart}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[420px] bg-white z-50
        transform transition-transform duration-300 
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* 🔹 Background Logo */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${Kavishita})`,
            backgroundSize: "280px",
          }}
        />

        {/* Content Wrapper */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="text-2xl font-medium">Your Cart</h2>
            <button onClick={toggleCart} className="text-2xl">✕</button>
          </div>

          {/* Items */}
          <div className="px-6 py-4 flex-1 overflow-y-auto space-y-6">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">
                Your cart is empty
              </p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-28 object-cover"
                  />


                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ₹ {item.price}
                    </p>


                    {/* Quantity */}
                    <div className="flex items-center border w-fit mt-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3"
                      >
                        –
                      </button>
                      <span className="px-4">{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-6 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Estimated Total</span>
              <span className="font-semibold">₹ {totalPrice}</span>
            </div>

            <button
              disabled={cart.length === 0}
              onClick={() => {
                closeCart();
                navigate("/checkout");
              }}
              className={`px-4 py-2 rounded w-full 
  ${cart.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white"}
  `}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;