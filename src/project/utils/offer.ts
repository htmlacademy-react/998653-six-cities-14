import {OfferPreview } from '../types/offers.type';
import { TSorting } from '../types/sorting.type';


const STARS_COUNT = 5;

function getGetRatingWidth(rating: number) {
  return `${100 * rating / STARS_COUNT}%`;
}

function sortByRating(a:OfferPreview, b:OfferPreview) {
  return a.rating - b.rating;
}

function sortLowToHigh(a:OfferPreview, b:OfferPreview) {
  return a.price -
  b.price;
}

function sortHighToLow(a:OfferPreview, b:OfferPreview) {
  return b.price - a.price;
}

const sorting: Record<TSorting, (offers:OfferPreview[]) => OfferPreview[]> =
{
  Popular: (offers:OfferPreview[]) => offers.slice(),
  HighToLow: (offers: OfferPreview[]) => offers.toSorted(sortHighToLow),
  LowToHigh: (offers: OfferPreview[]) => offers.toSorted(sortLowToHigh),
  TopRated: (offers: OfferPreview[]) => offers.toSorted(sortByRating)
};


export {sorting, getGetRatingWidth };
