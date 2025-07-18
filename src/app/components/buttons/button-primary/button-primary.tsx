"use client";
import Image from "next/image";
import classes from "./button-primary.module.css";
import { useState } from "react";
import { useTheme } from "@/theme/themeContext";
import { ButtonPrimaryProps } from "./button-primary.types";

export default function ButtonPrimary({
  imgSrc,
  btnText,
  backgroundColor,
  borderRadius,
  textColor,
  padding,
  hoverColor,
  border,
  className,
  isDisabled,
  onClick,
  type = "button",
}: ButtonPrimaryProps) {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const themeValues = theme.buttonPrimary;

  return (
    <div
      className={`${classes.btnContainer} ${className}`}
      style={{
        backgroundColor: isHovered
          ? hoverColor || themeValues?.hoverColor
          : backgroundColor || themeValues?.backgroundColor,
        borderRadius: borderRadius || themeValues?.borderRadius,
        padding: padding || themeValues?.padding,
        border: border || themeValues?.border,
        opacity: isDisabled ? 0.6 : 1,
        pointerEvents: isDisabled ? "none" : "auto",
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      onClick={(e) => {
        if (isDisabled) {
          e.stopPropagation();
          return;
        }
        onClick?.();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {imgSrc && (
        <Image src={imgSrc} alt="icon" width={15} height={15} loading="lazy" />
      )}
      <button
        aria-label={typeof btnText === "string" ? btnText : undefined}
        type={type}
        className={classes.btn}
        style={{
          color: isHovered
            ? themeValues?.hoverTextColor || textColor || themeValues?.textColor
            : textColor || themeValues?.textColor,
        }}>
        {btnText}
      </button>
    </div>
  );
}
