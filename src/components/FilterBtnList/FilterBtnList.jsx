import PropTypes from 'prop-types';
import {
  BtnList,
  FollowedButton,
  NotfollowedButton,
  AllButton,
} from './FilterBtnList.styled';

export const FilterBtnList = ({
  filter,
  setFilter,
  statusFilters,
  setisStatusFiltersAll,
}) => {
  return (
    <BtnList>
      <li>
        <FollowedButton
          selected={filter === statusFilters.followed}
          onClick={() => {
            setFilter(statusFilters.followed);
            setisStatusFiltersAll(false);
          }}
        >
          FOLLOWED
        </FollowedButton>
      </li>
      <li>
        <AllButton
          selected={filter === statusFilters.all}
          onClick={() => {
            setFilter(statusFilters.all);
            setisStatusFiltersAll(true);
          }}
        >
          ALL
        </AllButton>
      </li>
      <li>
        <NotfollowedButton
          selected={filter === statusFilters.notFollowed}
          onClick={() => {
            setFilter(statusFilters.notFollowed);
            setisStatusFiltersAll(false);
          }}
        >
          NOT FOLLOWED
        </NotfollowedButton>
      </li>
    </BtnList>
  );
};

FilterBtnList.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  statusFilters: PropTypes.shape({
    all: PropTypes.string.isRequired,
    followed: PropTypes.string.isRequired,
    notFollowed: PropTypes.string.isRequired,
  }).isRequired,
  setisStatusFiltersAll: PropTypes.func.isRequired,
};

/* <Wrapper onClick={handleChange} isClick={isClick} />;

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ isClick }) => (isClick ? 'green' : 'red')};
`;

const handleChange = () => {
  setIsCLick(prev => !prev);
}; */
