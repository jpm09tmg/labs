// lib/vacationDestinations.ts
export interface VacationDestination {
  id: number;
  location: string; // Changed from city/country to location to match your existing code
  price: number;
  averageYearlyTemperature: number;
}

const vacationDestinations: VacationDestination[] = [
  {
    id: 1,
    location: "Paris, France",
    price: 1200,
    averageYearlyTemperature: 12
  },
  {
    id: 2,
    location: "Tokyo, Japan",
    price: 1500,
    averageYearlyTemperature: 16
  },
  {
    id: 3,
    location: "New York, USA",
    price: 1100,
    averageYearlyTemperature: 13
  },
  {
    id: 4,
    location: "Sydney, Australia",
    price: 1400,
    averageYearlyTemperature: 18
  },
  {
    id: 5,
    location: "London, United Kingdom",
    price: 1000,
    averageYearlyTemperature: 10
  },
  {
    id: 6,
    location: "Rome, Italy",
    price: 900,
    averageYearlyTemperature: 16
  },
  {
    id: 7,
    location: "Barcelona, Spain",
    price: 800,
    averageYearlyTemperature: 17
  },
  {
    id: 8,
    location: "Dubai, UAE",
    price: 1300,
    averageYearlyTemperature: 28
  }
];

export default vacationDestinations;