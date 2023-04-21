import { useState, useEffect } from 'react';
import {
  CardContainer,
  CardList,
  GoBackLink,
  LoadMoreBtn,
} from './Tweets.styled';
import { CardsItem } from '../../components/CardItem/CardsItem';
import { FilterBtnList } from '../../components/FilterBtnList/FilterBtnList';
import { PageLoader } from '../../components/PageLoader/PageLoader';
// CardAPIs
import {
  firstFetchUsers,
  fetchUsers,
  followUser,
  unfollowUser,
} from '../../CardsAPI';

const statusFilters = {
  all: 'all',
  followed: 'followed',
  notFollowed: 'notFollowed',
};

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingFollow, setLoadingFollow] = useState(false);
  const [filter, setFilter] = useState(statusFilters.all);
  const [page, setPage] = useState(1);
  const [showLoadBtn, setShowLoadBtn] = useState(false);
  const [isStatusFiltersAll, setisStatusFiltersAll] = useState(true);

  useEffect(() => {
    setShowLoadBtn(false);
    setIsLoading(true);
    firstFetchUsers(page)
      .then(data => {
        console.log(data);
        setUsers(prevState => [...prevState, ...data]);
        setIsLoading(false);
        setShowLoadBtn(true);
        if (users.length + data.length >= 12) {
          setShowLoadBtn(false);
        }
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const doFollowUser = (id, followers) => {
    setLoadingFollow(true);
    followUser(id, followers).then(data => {
      fetchUsers(page)
        .then(data => {
          console.log(data);
          setUsers(data);
          setIsLoading(false);
          setLoadingFollow(false);
        })
        .catch(err => console.log(err));
    });
  };

  const doUnfollowUser = (id, followers) => {
    setLoadingFollow(true);
    unfollowUser(id, followers).then(data => {
      fetchUsers(page)
        .then(data => {
          console.log(data);
          setUsers(data);
          setIsLoading(false);
          setLoadingFollow(false);
        })
        .catch(err => console.log(err));
    });
  };

  const getVisibleUsers = (users, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.notFollowed:
        return users.filter(user => user.followed === false);
      case statusFilters.followed:
        return users.filter(user => user.followed === true);
      default:
        return users;
    }
  };

  const visibleUsers = getVisibleUsers(users, filter);

  return (
    <CardContainer>
      <GoBackLink to="/">GO BACK</GoBackLink>
      <FilterBtnList
        filter={filter}
        setFilter={setFilter}
        statusFilters={statusFilters}
        setisStatusFiltersAll={setisStatusFiltersAll}
      />
      {isLoading ? (
        <PageLoader />
      ) : (
        <CardList>
          {visibleUsers.map(
            ({ id, name, followers, tweets, avatar, followed }) => (
              <CardsItem
                key={id}
                name={name}
                followers={followers}
                tweets={tweets}
                avatar={avatar}
                id={id}
                followed={followed}
                isLoading={loadingFollow}
                doFollowUser={doFollowUser}
                doUnfollowUser={doUnfollowUser}
              />
            )
          )}
        </CardList>
      )}
      {showLoadBtn && isStatusFiltersAll && (
        <LoadMoreBtn onClick={() => setPage(prevState => prevState + 1)}>
          Load more
        </LoadMoreBtn>
      )}
    </CardContainer>
  );
};

export default Tweets;
