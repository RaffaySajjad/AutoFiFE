export interface SearchParams {
  pageSize: number;
  offset: number;
  make: string | null;
  model: string | null;
  startPrice: number | null;
  endPrice: number | null;
  status: string | null;
  mileage: number | null;
  startYear: number;
  endYear: number;
  sortOrder: string | null;
  gearbox: string;
  selectedColor: string;
}
