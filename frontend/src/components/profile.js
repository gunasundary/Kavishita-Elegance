import React from "react";

    
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) {
    return <h2 className="text-center mt-10">Please login first</h2>;
  }
  const handleLogout = () => {

    // remove user data
    localStorage.removeItem("userInfo");

    // redirect to login page
    navigate("/login");
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Welcome {user.name}</h1>
      <p>{user.email}</p>
       <button
        onClick={handleLogout}
        className="bg-[#7a4a2e] text-white px-6 py-2 rounded-md hover:bg-[#5c3522]"
      >
        Sign Out
      </button>

    </div>
  );
}

export default Profile;