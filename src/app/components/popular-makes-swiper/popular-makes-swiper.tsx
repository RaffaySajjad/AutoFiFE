"use client";
import useVehiclesByMake from "@/hooks/useVehiclesByMake";
import "swiper/css";
import EmptyState from "../empty-state/empty-state";
import ErrorMessage from "../error-message/error-message";
import HorizontalCarousel from "../vehicle-carousel/horizontal-carousel/horizontal-carousel";
import { CarSwiperProps } from "./popular-makes.swiper.types";
import { Loading } from "@/app/components";

export default function PopularMakesSwiper({ make }: CarSwiperProps) {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useVehiclesByMake(make);

  if (isLoading) return <Loading />;
  if (!data)
    return (
      <EmptyState message="No vehicles found" color="var(--color-white100)" />
    );
  if (isError) return <ErrorMessage message={error.message} />;

  const allVehicles = data.pages.flatMap((page) => page.vehicles) || [];

  return (
    <HorizontalCarousel
      vehicleListResult={{
        vehicles: allVehicles,
        totalCount: data.pages[0]?.totalCount || 0,
        gearboxCounts: data.pages[0]?.gearboxCounts || [],
        colorCounts: data.pages[0]?.colorCounts || [],
      }}
      onReachEnd={() => {
        if (hasNextPage) fetchNextPage();
      }}
    />
  );
}
