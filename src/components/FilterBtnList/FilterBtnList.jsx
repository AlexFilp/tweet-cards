import { FilterButton } from '../FilterButton/FilterButton';
import { BtnList } from './FilterBtnList.styled';

export const FilterBtnList = ({
  filter,
  setFilter,
  statusFilters,
  setisStatusFiltersAll,
}) => {
  return (
    <BtnList>
      <li>
        <FilterButton
          selected={filter === statusFilters.followed}
          onClick={() => {
            setFilter(statusFilters.followed);
            setisStatusFiltersAll(false);
          }}
        >
          FOLLOWED
        </FilterButton>
      </li>
      <li>
        <FilterButton
          selected={filter === statusFilters.all}
          onClick={() => {
            setFilter(statusFilters.all);
            setisStatusFiltersAll(true);
          }}
        >
          ALL
        </FilterButton>
      </li>
      <li>
        <FilterButton
          selected={filter === statusFilters.notFollowed}
          onClick={() => {
            setFilter(statusFilters.notFollowed);
            setisStatusFiltersAll(false);
          }}
        >
          NOT FOLLOWED
        </FilterButton>
      </li>
    </BtnList>
  );
};
