import { FilterButton } from '../FilterButton/FilterButton';
import { BtnList } from './FilterBtnList.styled';

export const FilterBtnList = ({ filter, setFilter, statusFilters }) => {
  return (
    <BtnList>
      <li>
        <FilterButton
          selected={filter === statusFilters.followed}
          onClick={() => setFilter(statusFilters.followed)}
        >
          FOLLOWED
        </FilterButton>
      </li>
      <li>
        <FilterButton
          selected={filter === statusFilters.all}
          onClick={() => setFilter(statusFilters.all)}
        >
          ALL
        </FilterButton>
      </li>
      <li>
        <FilterButton
          selected={filter === statusFilters.notFollowed}
          onClick={() => setFilter(statusFilters.notFollowed)}
        >
          NOT FOLLOWED
        </FilterButton>
      </li>
    </BtnList>
  );
};
