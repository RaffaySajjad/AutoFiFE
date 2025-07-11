"use client";
import headings from "@/styles/typography.module.css";
import Image from "next/image";
import classes from "./brand-card.module.css";
import { BrandCardProps } from "./brand-card.types";

export default function BrandCard({
  imgSrc = "/images/audi.png",
  brand,
  onClick,
}: BrandCardProps) {
  return (
    <div className={classes.cardContainer} onClick={onClick}>
      <Image
        src={imgSrc}
        alt="brand-logo"
        width={100}
        height={100}
        loading="lazy"
      />
      <p className={`${headings.brandText} ${classes.centerText}`}>{brand}</p>
    </div>
  );
}
