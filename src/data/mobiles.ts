export interface MobileData {
  rank: number;
  name: string;
  brand: string;
  price: string;
  score: number;
  rating: number;
  ram: string;
  storage: string;
  battery: string;
  camera: string;
  display: string;
  pros: string[];
  cons: string[];
}

export const mobiles: MobileData[] = [
  {
    rank: 1,
    name: 'Samsung Galaxy F14',
    brand: 'Samsung',
    price: '₹11,999',
    score: 92,
    rating: 4.6,
    ram: '6GB',
    storage: '128GB',
    battery: '6000 mAh',
    camera: '50MP + 2MP + 2MP',
    display: '6.5" FHD+',
    pros: ['Long battery life', 'Clean software experience'],
    cons: ['Moderate processor', 'Average low-light camera'],
  },
  {
    rank: 2,
    name: 'Redmi 13C',
    brand: 'Xiaomi',
    price: '₹10,999',
    score: 90,
    rating: 4.5,
    ram: '6GB',
    storage: '128GB',
    battery: '6000 mAh',
    camera: '50MP + 0.08MP',
    display: '6.74" HD+',
    pros: ['Excellent battery', 'Great value'],
    cons: ['Lower display refresh rate', 'Basic selfie camera'],
  },
  {
    rank: 3,
    name: 'realme Narzo 70 5G',
    brand: 'realme',
    price: '₹12,999',
    score: 89,
    rating: 4.4,
    ram: '6GB',
    storage: '128GB',
    battery: '6000 mAh',
    camera: '64MP + 2MP + 0.3MP',
    display: '6.72" FHD+',
    pros: ['5G support', 'Fast charging'],
    cons: ['Average low-light camera', 'Bulky design'],
  },
  {
    rank: 4,
    name: 'itel A58',
    brand: 'itel',
    price: '₹9,499',
    score: 86,
    rating: 4.2,
    ram: '4GB',
    storage: '64GB',
    battery: '6000 mAh',
    camera: '13MP + AI',
    display: '6.56" HD+',
    pros: ['Affordable price', 'Long battery life'],
    cons: ['Modest performance', 'Low-res display'],
  },
];
