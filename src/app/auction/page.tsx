import { Auction, RoundedContainer } from "@/app/components";
import Footer from "../components/footer/footer";
import NavbarContainer from "../components/navbar/navbar-container";
import classes from "./page.module.css";
export default function AuctionPage() {
  return (
    <div className={classes.container}>
      <NavbarContainer backgroundColor="var(--color-gray600)" />
      <Auction />
      <RoundedContainer />
      <Footer />
    </div>
  );
}
