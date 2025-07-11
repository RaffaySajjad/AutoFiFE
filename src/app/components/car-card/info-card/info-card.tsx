import CarImage from "../../result-card/car-image/car-image";
import { InfoCardProps } from "./info-card.types";
import classes from "./info-card.module.css";

export default function VehicleInfoCard({
  similarity_score,
  children,
  onClick,
  imageSrc,
}: InfoCardProps) {
  return (
    <div
      onClick={onClick}
      className={`${classes.recommendationCard} ${classes.card} `}>
      <CarImage src={imageSrc ?? "/images/glc_2023.png"}>
        {similarity_score && (
          <div className={classes.favorite}>
            {`${(similarity_score * 100).toFixed(1)}%`}
          </div>
        )}
      </CarImage>
      <div>{children}</div>
    </div>
  );
}
