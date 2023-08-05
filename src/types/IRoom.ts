export interface IRoom {
  id: string;
  name: string;
  summary?: string;
  propertyType: string;
  listingUrl: string;
  amenities: string[];
  price: number;
  currency: "INR" | "GBP" | "USD";
  thumbnail: string;
  images: string[];
  address: {
    street: string;
    market: string;
    country: string;
  };
  rating: number;
}
