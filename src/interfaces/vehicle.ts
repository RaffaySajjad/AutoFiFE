export interface Vehicle {
  id: number;
  vin: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  fuelType: string;
  transmission: string;
}

export interface VehicleListResult {
  totalCount: number;
  gearboxCounts: Record<string, number>;
  colorCounts: Record<string, number>;
  vehicles: Vehicle[];
}
