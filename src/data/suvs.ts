export interface SUVData {
  rank: number;
  name: string;
  brand: string;
  price: string;
  score: number;
  rating: number;
  fuelType: string;
  transmission: string;
  mileage: string;
  seating: string;
  bootSpace: string;
  pros: string[];
  cons: string[];
}

export const suvs: SUVData[] = [
  {
    rank: 1,
    name: 'Tata Nexon',
    brand: 'Tata',
    price: '₹9.80 Lakh',
    score: 93,
    rating: 4.8,
    fuelType: 'Petrol',
    transmission: 'AMT',
    mileage: '18 kmpl',
    seating: '5 seater',
    bootSpace: '350 L',
    pros: ['Excellent safety', 'Strong cabin quality'],
    cons: ['Firm ride at low speed', 'Higher top-trim pricing'],
  },
  {
    rank: 2,
    name: 'Maruti Suzuki Brezza',
    brand: 'Maruti Suzuki',
    price: '₹10.25 Lakh',
    score: 92,
    rating: 4.7,
    fuelType: 'Petrol',
    transmission: 'MT/AT',
    mileage: '18 kmpl',
    seating: '5 seater',
    bootSpace: '328 L',
    pros: ['Low maintenance', 'Strong dealer network'],
    cons: ['Conservative design', 'Quiet cabin requires upgrade'],
  },
  {
    rank: 3,
    name: 'Kia Sonet',
    brand: 'Kia',
    price: '₹9.40 Lakh',
    score: 91,
    rating: 4.6,
    fuelType: 'Petrol',
    transmission: 'DCT',
    mileage: '18 kmpl',
    seating: '5 seater',
    bootSpace: '392 L',
    pros: ['Feature-packed', 'Distinctive styling'],
    cons: ['Firm ride', 'Higher price for premium variants'],
  },
  {
    rank: 4,
    name: 'Hyundai Venue',
    brand: 'Hyundai',
    price: '₹10.60 Lakh',
    score: 90,
    rating: 4.5,
    fuelType: 'Petrol',
    transmission: 'DCT',
    mileage: '18 kmpl',
    seating: '5 seater',
    bootSpace: '350 L',
    pros: ['Refined engine', 'Comfortable ride'],
    cons: ['Average rear seat space', 'Pricey top trims'],
  },
];
