import type { StaticImageData } from 'next/image';

import BalenoImage from '@/images/maruti_baleno.png';
import BrezzaImage from '@/images/Brezza_2026.jpg';
import VenueImage from '@/images/hyundai_venue.png';
import XUV3XOImage from '@/images/Mahindra_XUV_3XO.png';
import DzireImage from '@/images/maruti_dzire.png';
import ErtigaImage from '@/images/maruti_ertiga.png';
import NexonImage from '@/images/tata_nexon.png';
import PunchImage from '@/images/tata_punch.jpg';
import TiagoImage from '@/images/tata_tiago.png';

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
  powerBhp: string;
  engineOptions: string[];
  bootSpace: string;
  pros: string[];
  cons: string[];
  image?: StaticImageData;
}

export const cars: CarData[] = [
  {
    rank: 1,
    name: 'Tata Nexon',
    brand: 'Tata',
    price: '₹9.80 Lakh',
    score: 95,
    rating: 4.8,
    bodyType: 'SUV',
    fuelType: 'Petrol',
    transmission: 'AMT',
    mileage: '18 kmpl',
    power: '115 PS',
    powerBhp: '113 bhp',
    engineOptions: ['1.2L Turbocharged Petrol (115 PS / 113 bhp)'],
    bootSpace: '350 L',
    pros: ['Best-in-class safety', 'Strong build quality', 'Premium feel for the segment'],
    cons: ['Firm ride on rough roads', 'Higher price on top trims'],
    image: NexonImage,
  },
  {
    rank: 2,
    name: 'Maruti Suzuki Baleno',
    brand: 'Maruti Suzuki',
    price: '₹8.25 Lakh',
    score: 93,
    rating: 4.7,
    bodyType: 'Hatchback',
    fuelType: 'Petrol',
    transmission: 'CVT',
    mileage: '22 kmpl',
    power: '90 PS',
    powerBhp: '89 bhp',
    engineOptions: ['1.2L Dualjet Petrol (90 PS / 89 bhp)'],
    bootSpace: '339 L',
    pros: ['Spacious cabin', 'Excellent fuel economy', 'Strong resale value'],
    cons: ['Interior plastics are average', 'No AWD option'],
    image: BalenoImage,
  },
  {
    rank: 3,
    name: 'Mahindra XUV 3XO',
    brand: 'Mahindra',
    price: '₹9.35 Lakh',
    score: 92,
    rating: 4.6,
    bodyType: 'SUV',
    fuelType: 'Petrol',
    transmission: 'MT/AMT',
    mileage: '17 kmpl',
    power: '120 PS',
    powerBhp: '117 bhp',
    engineOptions: ['1.2L Turbo GDi Petrol (120 PS / 117 bhp)'],
    bootSpace: '350 L',
    pros: ['Aggressive styling', 'Strong performance', 'Comfortable cabin'],
    cons: ['Firm ride quality', 'Rear-seat headroom is average'],
    image: XUV3XOImage,
  },
  {
    rank: 4,
    name: 'Hyundai Venue',
    brand: 'Hyundai',
    price: '₹9.75 Lakh',
    score: 91,
    rating: 4.6,
    bodyType: 'SUV',
    fuelType: 'Petrol',
    transmission: 'DCT',
    mileage: '18 kmpl',
    power: '120 PS',
    powerBhp: '118 bhp',
    engineOptions: ['1.0L Turbo GDi Petrol (120 PS / 118 bhp)'],
    bootSpace: '350 L',
    pros: ['Refined engine', 'Comfortable ride', 'Good feature set'],
    cons: ['Rear seat space is tight', 'Premium variants are expensive'],
    image: VenueImage,
  },
  {
    rank: 5,
    name: 'Maruti Suzuki Brezza',
    brand: 'Maruti Suzuki',
    price: '₹9.50 Lakh',
    score: 90,
    rating: 4.5,
    bodyType: 'SUV',
    fuelType: 'Petrol',
    transmission: 'MT/AMT',
    mileage: '18 kmpl',
    power: '103 PS',
    powerBhp: '101 bhp',
    engineOptions: ['1.5L K15C Petrol (103 PS / 101 bhp)'],
    bootSpace: '328 L',
    pros: ['Low maintenance', 'Strong dealer network', 'Good safety package'],
    cons: ['Conservative design', 'Cabin feels dated compared to rivals'],
    image: BrezzaImage,
  },
  {
    rank: 6,
    name: 'Tata Punch',
    brand: 'Tata',
    price: '₹7.90 Lakh',
    score: 89,
    rating: 4.5,
    bodyType: 'Compact SUV',
    fuelType: 'Petrol',
    transmission: 'MT/AMT',
    mileage: '18 kmpl',
    power: '86 PS',
    powerBhp: '85 bhp',
    engineOptions: ['1.2L Revotron Petrol (86 PS / 85 bhp)'],
    bootSpace: '366 L',
    pros: ['Excellent safety score', 'Compact city-friendly size', 'Modern styling'],
    cons: ['Low power in base engine', 'Ride can feel firm on broken roads'],
    image: PunchImage,
  },
  {
    rank: 7,
    name: 'Maruti Suzuki Dzire',
    brand: 'Maruti Suzuki',
    price: '₹8.15 Lakh',
    score: 88,
    rating: 4.4,
    bodyType: 'Sedan',
    fuelType: 'Petrol',
    transmission: 'AMT/CVT',
    mileage: '20 kmpl',
    power: '90 PS',
    powerBhp: '89 bhp',
    engineOptions: ['1.2L Dualjet Petrol (90 PS / 89 bhp)'],
    bootSpace: '420 L',
    pros: ['Comfortable ride', 'Spacious boot', 'Low running cost'],
    cons: ['Plain exterior design', 'Interior feels conservative'],
    image: DzireImage,
  },
  {
    rank: 8,
    name: 'Maruti Suzuki Ertiga',
    brand: 'Maruti Suzuki',
    price: '₹9.80 Lakh',
    score: 87,
    rating: 4.4,
    bodyType: 'MPV',
    fuelType: 'Petrol',
    transmission: 'MT/AT',
    mileage: '19 kmpl',
    power: '103 PS',
    powerBhp: '101 bhp',
    engineOptions: ['1.5L K15C Petrol (103 PS / 101 bhp)'],
    bootSpace: '209 L',
    pros: ['Great family value', 'Spacious three-row layout', 'Reliable ownership'],
    cons: ['Less engaging to drive', 'Style is conservative'],
    image: ErtigaImage,
  },
  {
    rank: 9,
    name: 'Tata Tiago',
    brand: 'Tata',
    price: '₹6.75 Lakh',
    score: 86,
    rating: 4.3,
    bodyType: 'Hatchback',
    fuelType: 'Petrol',
    transmission: 'MT/AMT',
    mileage: '20 kmpl',
    power: '85 PS',
    powerBhp: '84 bhp',
    engineOptions: ['1.2L Revotron Petrol (85 PS / 84 bhp)'],
    bootSpace: '240 L',
    pros: ['Affordable price', 'Solid build', 'Good cabin quality for segment'],
    cons: ['Noisy engine under load', 'Small boot compared to rivals'],
    image: TiagoImage,
  },
];
