"use client";
import ErrorMessage from "@/app/components/error-message/error-message";
import NavbarContainer from "@/app/components/navbar/navbar-container";
import useVehiclesById from "@/hooks/useVehicleById";
import { CircularProgress } from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";
import classes from "./page.module.css";
import Footer from "@/app/components/footer/footer";
import {
  Borrow,
  ContactInfo,
  DOB,
  DrivingLicenseType,
  EmploymentStatus,
  GetFinanceQuote,
  Header,
  MaritalStatus,
  RoundedContainer,
} from "@/app/components";
export default function FinancePage() {
  const params = useParams();
  const idParam = params.id;
  const [step, setStep] = useState(1);
  const TOTAL_STEPS = 7;

  const id = idParam ? Number(idParam) : -1;
  const {
    data: vehicle,
    isLoading,
    isError,
    error,
  } = useVehiclesById(id as number);

  if (isLoading) {
    return <CircularProgress />;
  }
  if (!vehicle) return <div>Vehicle not found</div>;
  if (isError) {
    return <ErrorMessage message={error.message} />;
  }
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const ProgressBar = () => {
    return (
      <div className={classes.progressBarContainer}>
        <div
          className={classes.progressBar}
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}></div>
      </div>
    );
  };

  return (
    <div className={classes.mainContainer}>
      <NavbarContainer backgroundColor="var(--color-gray600)" />
      <div className={classes.container}>
        <ProgressBar />
        {step > 1 && <Header vehicle={vehicle} prevStep={prevStep} />}
        {step === 1 && (
          <GetFinanceQuote vehicle={vehicle} nextStep={nextStep} />
        )}
        {step === 2 && <DrivingLicenseType nextStep={nextStep} />}
        {step === 3 && <MaritalStatus nextStep={nextStep} />}
        {step === 4 && <DOB nextStep={nextStep} />}
        {step === 5 && <EmploymentStatus nextStep={nextStep} />}
        {step === 6 && (
          <Borrow nextStep={nextStep} vehiclePrice={vehicle.price} />
        )}
        {step === 7 && <ContactInfo id={vehicle.id} />}
      </div>
      <RoundedContainer />
      <Footer />
    </div>
  );
}
