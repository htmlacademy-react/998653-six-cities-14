
const RentCount = {
  count: 6
} as const;


const PLACE_COUNT_DEFAULT = 6;
function getIndexValue<T extends number>(index: T){
  return {
    id: index
  };
}

const placeCountArr = Array.from({length: PLACE_COUNT_DEFAULT}, (_, index,) => getIndexValue(index));


export { RentCount, placeCountArr};
