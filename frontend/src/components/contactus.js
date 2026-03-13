import { useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "./navbar"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Navbar/>
    <div className="pt-24 px-6 md:px-20 relative">
      
      
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-4 text-gray-700">
          <p>
            Have questions about our jewellery, orders, or custom designs?
            Reach out to us anytime.
          </p>

          <p><strong>Email:</strong> support@kavishita.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Chennai, India</p>

          
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-lg shadow space-y-4"
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;