import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { API_URL } from "../api";

function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // 🔹 FETCH PRODUCTS FROM BACKEND
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // 🔹 FILTER LOGIC
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
        {/* 🔹 SEARCH + FILTER */}
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
              key={product._id}
              onClick={() => navigate(`/products/${product._id}`)}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <img
                src={`${API_URL.replace("/api", "")}/images/${product.images[0]}`}
                alt={product.name}
                className="w-full h-64 object-cover"
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