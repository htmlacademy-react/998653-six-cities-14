import { useState, KeyboardEvent } from 'react';
import classNames from 'classnames';

import { TSorting } from '../../types/sorting.type';
import { SortingMap } from '../../const/const';

type SortingProps = {
  activeSorting: TSorting;
  onChange: (newSorting: TSorting) => void;
};

function Sorting ({ activeSorting, onChange }: SortingProps) {
  const [isOpened, setIsOpened] = useState(false);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`,
  };

  function handleKeyDown(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  }

  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  function handleSortingItemClick(type: TSorting) {
    onChange(type);
    setIsOpened(false);
  }

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeyDown}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {` ${SortingMap[activeSorting]} `}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={classNames(
          'places__options',
          'places__options--custom',
          {
            'places__options--opened' : isOpened,
          }
        )}
      >
        {(
          Object.entries(SortingMap) as [
            TSorting,
            (typeof SortingMap)[TSorting]
          ][]
        ).map(([type, label]) =>(
          <li
            key={type}
            className={classNames(
              'places__option',
              {
                'places__option--active': activeSorting === type,
              })}
            tabIndex={0}
            onClick={() => handleSortingItemClick(type) }
          >
            {label}
          </li>
        ))}

      </ul>
    </form>
  );
}

export { Sorting };
