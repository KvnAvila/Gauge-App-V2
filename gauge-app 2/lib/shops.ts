export interface Shop {
  id: string;
  name: string;
  distance: number;
  rating: number;
  avgPrice: number;
  isTopChoice: boolean;
  discount: number;
  address: string;
  specialties: string[];
}

export const MOCK_SHOPS: Shop[] = [
  {
    id: "alamo-auto",
    name: "Alamo Auto Care",
    distance: 0.8,
    rating: 4.8,
    avgPrice: 120,
    isTopChoice: true,
    discount: 5,
    address: "2847 UTSA Blvd, San Antonio, TX",
    specialties: ["Engine diagnostics", "Emissions", "Brakes"],
  },
  {
    id: "utsa-quick-lube",
    name: "UTSA Quick Lube",
    distance: 1.4,
    rating: 4.6,
    avgPrice: 95,
    isTopChoice: false,
    discount: 5,
    address: "1602 N Loop 1604 W, San Antonio, TX",
    specialties: ["Oil changes", "Tire rotation"],
  },
  {
    id: "westside-brake",
    name: "Westside Brake & Muffler",
    distance: 2.1,
    rating: 4.7,
    avgPrice: 140,
    isTopChoice: false,
    discount: 5,
    address: "9200 Culebra Rd, San Antonio, TX",
    specialties: ["Brakes", "Exhaust", "Suspension"],
  },
  {
    id: "roadrunner-auto",
    name: "Roadrunner Auto Shop",
    distance: 2.8,
    rating: 4.5,
    avgPrice: 135,
    isTopChoice: false,
    discount: 5,
    address: "5521 Babcock Rd, San Antonio, TX",
    specialties: ["General repair", "Diagnostics"],
  },
];
