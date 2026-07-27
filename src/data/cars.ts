export interface CarData {
  rank: number;
  name: string;
  brand: string;
  price: string;
  score: number;
  rating: number;
  bodyType: string;
  fuelType: string;
  transmission: string;
  mileage: string;
  power: string;
  bootSpace: string;
  pros: string[];
  cons: string[];
}

export const cars: CarData[] = [
  {
    rank: 1,
    name: 'Maruti Suzuki Baleno',
    brand: 'Maruti Suzuki',
    price: '₹8.25 Lakh',
    score: 94,
    rating: 4.8,
    bodyType: 'Hatchback',
    fuelType: 'Petrol',
    transmission: 'CVT',
    mileage: '22 kmpl',
    power: '90 PS',
    bootSpace: '339 L',
    pros: ['Spacious cabin', 'Excellent fuel economy', 'Strong resale value'],
    cons: ['No AWD option', 'Interior plastics are average'],
  },
  {
    rank: 2,
    name: 'Tata Nexon',
    brand: 'Tata',
    price: '₹9.80 Lakh',
    score: 92,
    rating: 4.7,
    bodyType: 'SUV',
    fuelType: 'Petrol',
    transmission: 'AMT',
    mileage: '18 kmpl',
    power: '115 PS',
    bootSpace: '350 L',
    pros: ['Excellent safety features', 'Solid build quality'],
    cons: ['Firm ride at low speeds', 'Higher price in top trims'],
  },
  {
    rank: 3,
    name: 'Hyundai i20',
    brand: 'Hyundai',
    price: '₹8.95 Lakh',
    score: 91,
    rating: 4.6,
    bodyType: 'Hatchback',
    fuelType: 'Petrol',
    transmission: 'DCT',
    mileage: '20 kmpl',
    power: '120 PS',
    bootSpace: '311 L',
    pros: ['Premium interior', 'Refined engine'],
    cons: ['Small boot for family needs', 'Higher service costs'],
  },
  {
    rank: 4,
    name: 'Kia Sonet',
    brand: 'Kia',
    price: '₹9.40 Lakh',
    score: 90,
    rating: 4.5,
    bodyType: 'SUV',
    fuelType: 'Petrol',
    transmission: 'DCT',
    mileage: '18 kmpl',
    power: '120 PS',
    bootSpace: '392 L',
    pros: ['Strong feature list', 'Bold styling'],
    cons: ['Firm ride on rough roads', 'Pricey top trims'],
  },
  {
    rank: 5,
    name: 'Honda Amaze',
    brand: 'Honda',
    price: '₹8.15 Lakh',
    score: 89,
    rating: 4.4,
    bodyType: 'Sedan',
    fuelType: 'Petrol',
    transmission: 'CVT',
    mileage: '20 kmpl',
    power: '90 PS',
    bootSpace: '420 L',
    pros: ['Comfortable ride', 'Spacious boot'],
    cons: ['Average dynamics', 'Plain exterior design'],
  },
];
