type OffersProps = Offer[];
type OfferPreviewProps = OfferPreview[];
type OfferProp = Offer;

type Offer = OfferPreview & {
  bedrooms: number;
  description: string;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

type OfferPreview = {
  city:{
		name: string;
		location: Location;
	};
	id: string;
	isFavorite: boolean;
	isPremium: boolean;
	location: Location;
	previewImage: string;
	price: number;
	rating: number;
	title: string;
	type: string;
}

type City = {
  location: Location;
  name: string;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type offersByCityProps ={
  offersByCity: Record<string, OfferPreviewProps>;
}

export type { OffersProps, OfferPreviewProps, OfferProp, Host, Location, City, offersByCityProps};
