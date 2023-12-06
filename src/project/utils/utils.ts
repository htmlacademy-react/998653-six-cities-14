const PLACE_COUNT_DEFAULT = 6;

function getIndexValue<T extends number>(index: T){
  return {
    id: index
  };
}

const placeCountArr = Array.from({length: PLACE_COUNT_DEFAULT}, (_, index,) => getIndexValue(index));

const setCapitalLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export { placeCountArr, setCapitalLetter};
