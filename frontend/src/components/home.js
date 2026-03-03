import Navbar from "./navbar";
import HomeSlider from "./homeslider";
import ShopByCategory from "./shopbycategory";

function Home() {
  return (
    <div>
        <Navbar/>
     <HomeSlider />
     <ShopByCategory/>
    </div>
  );
}

export default Home;