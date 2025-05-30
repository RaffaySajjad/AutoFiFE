import Image from "next/image";
import ButtonNavigate from "../buttons/Navigate";
import CarImages from "../car-images";
import classes from "./car-image-gallery.module.css";
import { useState } from "react";
export default function CarImageGallery() {
  const images = [
    "/images/glc_2023.png",
    "/images/atlis_2023.png",
    "/images/audi_a6_3.5.png",
    "/images/BMW-X6-Card.png",
    "/images/BMW-X5-Card.png",
    "/images/BMW-Card.png",
    "/images/ford_explorer_2023.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className={classes.imgContainer}>
      <Image
        src={images[currentIndex]}
        alt="car-img"
        width={740}
        height={340}
      />
      <div className={classes.allImagesContainer}>
        <ButtonNavigate
          type="prev"
          className={classes.navigate}
          onClick={handlePrev}
        />
        <div className={classes.carImages}>
          {images.map((image, index) => (
            <CarImages
              key={index}
              imgSrc={image}
              selected={index === currentIndex}
            />
          ))}
        </div>
        <ButtonNavigate
          type="next"
          className={classes.navigate}
          onClick={handleNext}
        />
        <div className={classes.imageCount}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
