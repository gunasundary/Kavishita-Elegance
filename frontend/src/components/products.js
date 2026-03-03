import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/product";
import Navbar from "./navbar";

function Products() {
  const navigate = useNavigate();

  // 🔹 NEW STATE
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // 🔹 FILTER LOGIC (OUTSIDE return)
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <div className="mt-28 px-6">

        {/* 🔹 SEARCH + FILTER BAR */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search jewellery..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 w-full md:w-1/2"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 w-full md:w-48"
          >
            <option value="All">All</option>
            <option value="Necklace">Necklace</option>
            <option value="Ring">Ring</option>
            <option value="Earrings">Earrings</option>
          </select>
        </div>

        {/* 🔹 PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <img
                src={product.image}
                className="w-full h-64 object-cover"
                alt={product.name}
              />
              <div className="p-3 text-center">
                <p className="font-semibold">{product.name}</p>
                <p className="text-gray-600">₹ {product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <p className="text-center mt-10 text-gray-500">
            No products found
          </p>
        )}
      </div>
    </>
  );
}

export default Products;