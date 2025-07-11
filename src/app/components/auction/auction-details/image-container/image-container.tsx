import Image from "next/image";
import classes from "./image-container.module.css";
import FeaturedAuction from "@/assets/images/cars/2018_Honda_Civic.png";
export default function ImageContainer() {
  return (
    <div className={classes.container}>
      <Image
        src={FeaturedAuction}
        alt="car-image"
        fill
        className={classes.image}
      />
    </div>
  );
}
