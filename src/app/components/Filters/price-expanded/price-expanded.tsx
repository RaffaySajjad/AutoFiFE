"use client";
import { useSearch } from "@/contexts/car-search-context/car-search-context";
import { MAX_PRICE, MIN_PRICE } from "@/constants";
import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";
import classes from "./price-expanded.module.css";

export default function PriceExpanded() {
  const { mainSearch, setStagedSearch, setMainSearch } = useSearch();
  const [localRange, setLocalRange] = useState<[number, number]>([
    mainSearch.startPrice ?? MIN_PRICE,
    mainSearch.endPrice ?? MAX_PRICE,
  ]);
  const getDisplayText = () => {
    const [min, max] = localRange;
    if (min === 0 && max === 0) return "$0";
    if (min === MIN_PRICE && max === MAX_PRICE) return "All Prices";
    if (min === MIN_PRICE) return `Less than $${max.toLocaleString()}`;
    if (max === MAX_PRICE) return `Greater than $${min.toLocaleString()}`;
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  const handleChange = (
    _: React.SyntheticEvent | Event,
    value: number | number[]
  ) => {
    if (Array.isArray(value)) {
      setLocalRange(value as [number, number]);
    }
  };
  const handleChangeCommitted = (
    _: React.SyntheticEvent | Event,
    value: number | number[]
  ) => {
    if (Array.isArray(value)) {
      const [min, max] = value;
      setStagedSearch((prev) => ({
        ...prev,
        stagedStartPrice: min === MIN_PRICE ? null : min,
        stagedEndPrice: max === MAX_PRICE ? null : max,
      }));
      let priceText = "All_Prices";
      if (min === 0 && max === 0) priceText = "0";
      else if (min === MIN_PRICE && max !== MAX_PRICE) priceText = `<${max}`;
      else if (min !== MIN_PRICE && max === MAX_PRICE) priceText = `>${min}`;
      else if (min !== MIN_PRICE && max !== MAX_PRICE)
        priceText = `${min}-${max}`;
      setMainSearch({
        ...mainSearch,
        price: priceText,
      });
    }
  };

  const handleClear = () => {
    setLocalRange([MIN_PRICE, MAX_PRICE]);
    setStagedSearch((prev) => ({
      ...prev,
      stagedStartPrice: null,
      stagedEndPrice: null,
    }));
    setMainSearch({
      ...mainSearch,
      price: "All_Prices",
    });
  };

  return (
    <div className={classes.priceSlider}>
      <Box>
        <Typography>{getDisplayText()}</Typography>
        <Slider
          value={localRange}
          onChange={handleChange}
          onChangeCommitted={handleChangeCommitted}
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={1000}
          valueLabelDisplay="off"
        />
        <button onClick={handleClear} className={classes.clearBtn}>
          Clear
        </button>
      </Box>
    </div>
  );
}
