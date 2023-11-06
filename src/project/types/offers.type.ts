export type OffersProps = Offer[];

export interface Offer{
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export interface City {
  location: Location;
  name: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface Host {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export default {}
