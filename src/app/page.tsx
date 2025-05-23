import ExploreVehicles from "./components/all-vehicles";
import CarVideo from "./components/car-video";
import Footer from "./components/footer";
import Hero from "./components/hero";
import LatestBlog from "./components/latest-blog";
import PopularMakes from "./components/popular-makes";
import PremiumBrands from "./components/premium-brands";
import Shop from "./components/shop";
import Statistics from "./components/statistics";
import Customers from "./components/what-our-customers-say";
import WhyChooseUs from "./components/why-choose-us";
import classes from "./page.module.css";
export default function Home() {
  return (
    <div className={classes.container}>
      <Hero />
      <PremiumBrands />
      <ExploreVehicles />
      <CarVideo />
      <Statistics />
      <WhyChooseUs />
      <PopularMakes />
      <Shop />
      <Customers />
      <LatestBlog />
      <Footer />
    </div>
  );
}
