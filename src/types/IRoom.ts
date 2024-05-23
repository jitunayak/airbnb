export interface IRoom {
  address: {
    country: string;
    market: string;
    street: string;
  };
  amenities: string[];
  currency: 'GBP' | 'INR' | 'USD' | string;
  id: string;
  images: string[];
  listingUrl: string;
  name: string;
  price: {
    discountedPrice: number;
    originalPrice: number;
    serviceCharge: number;
  };
  propertyType: string;
  rating: number;
  summary?: string;
  thumbnail: string;
}
