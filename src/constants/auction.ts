import { VehicleAuctionData } from "@/interfaces/auction";

export const auctionData = [
  {
    vehicleDetails: "2008 Bentley Arnage 6.8 R",
    price: 38500,
    endUTC: "2025-07-16 15:00:00.000 +0500",
    tag: "Live",
  },
  {
    vehicleDetails: "2015 Audi RS5 Coupe",
    price: 48900,
    endUTC: "2025-07-17 8:00:00.000 +0500",
    tag: "Live",
  },
  {
    vehicleDetails: "2020 BMW M3 Competition",
    price: 61500,
    endUTC: "2025-07-20 10:00:00.000 +0500",
    tag: "Live",
  },
  {
    vehicleDetails: "2022 Tesla Model S Plaid",
    price: 89900,
    endUTC: "2025-07-18 9:00:00.000 +0500",
    tag: "Live",
  },
  {
    vehicleDetails: "2017 Porsche 911 Carrera",
    price: 74000,
    endUTC: "2025-07-30 15:00:00.000 +0500",
    tag: "Live",
  },
  {
    vehicleDetails: "2018 Mercedes-AMG C63 S",
    price: 67000,
    endUTC: "2025-07-24 20:00:00.000 +0500",
    tag: "Live",
  },
];

export const dropdownFilters = ["Status", "Make", "Price", "Sort"];
export const mockVehicleData: VehicleAuctionData[] = [
  {
    vehicleName: "2020 BMW 328i Sports Package",
    currentBid: 25000,
    bidCount: 12,
    timeLeft: "2d 12h",
  },
  {
    vehicleName: "2019 Audi A4 Premium",
    currentBid: 23000,
    bidCount: 9,
    timeLeft: "1d 4h",
  },
  {
    vehicleName: "2020 Audi A4 Premium",
    currentBid: 42000,
    bidCount: 20,
    timeLeft: "3d 2h",
  },
  {
    vehicleName: "2023 Toyota Camry",
    currentBid: 42000,
    bidCount: 20,
    timeLeft: "3d 2h",
  },
  {
    vehicleName: "2020 Kia Forte",
    currentBid: 42000,
    bidCount: 20,
    timeLeft: "3d 2h",
  },
  {
    vehicleName: "2024 Audi A4",
    currentBid: 42000,
    bidCount: 20,
    timeLeft: "3d 2h",
  },
  {
    vehicleName: "2022 Tesla Model 3",
    currentBid: 42000,
    bidCount: 20,
    timeLeft: "3d 2h",
  },
  {
    vehicleName: "2023 Tesla Model 3",
    currentBid: 42000,
    bidCount: 20,
    timeLeft: "3d 2h",
  },
  {
    vehicleName: "2024 Tesla Model 3",
    currentBid: 42000,
    bidCount: 20,
    timeLeft: "3d 2h",
  },
  {
    vehicleName: "2025 Bentley Arnage",
    currentBid: 42000,
    bidCount: 20,
    timeLeft: "3d 2h",
  },
];
