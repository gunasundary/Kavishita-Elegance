import Navbar from "./navbar";
import HomeSlider from "./homeslider";
import ShopByCategory from "./shopbycategory";
import Newarrivals from "./newarrival";
import Newsletter from "./newsletter";
import Footer from "./footer";

function Home() {
  return (
    <div>
        <Navbar/>
     <HomeSlider />
     <ShopByCategory/>
     <Newarrivals/>
     <Newsletter/>
     <Footer/>
    </div>
  );
}

export default Home;