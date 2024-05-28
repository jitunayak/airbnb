export interface IRoom {
  address: string;
  amenities: string[];
  currency: 'GBP' | 'INR' | 'USD' | string;
  description: string;
  id: string;
  images: { id: string; url: string }[];
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
  user: {
    email: string;
    id: string;
    name: string;
    picture: string;
  };
}
