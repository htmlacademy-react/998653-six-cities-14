export type OffersProps = Root2[];

export interface Root2 {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location2;
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

export interface Location2 {
  latitude: number;
  longitude: number;
  zoom: number;
}

