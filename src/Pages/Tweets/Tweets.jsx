import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import {
  CardContainer,
  CardList,
  GoBackLink,
  LoadMoreBtn,
  LoaderContainer,
} from './Tweets.styled';

import { CardsItem } from '../../components/CardItem/CardsItem';
import { FilterBtnList } from '../../components/FilterBtnList/FilterBtnList';
import { TweetsPageLoader } from '../../components/PageLoader/TweetsPageLoader';
// CardAPIs
import {
  fetchAllCards,
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
  const [allUsers, setAllUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingFollow, setLoadingFollow] = useState(false);
  const [filter, setFilter] = useState(statusFilters.all);
  const [page, setPage] = useState(1);
  const [showLoadBtn, setShowLoadBtn] = useState(false);
  const [isStatusFiltersAll, setisStatusFiltersAll] = useState(true);
  const cardsEndRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    fetchAllCards()
      .then(data => {
        setAllUsers(data.length);
        firstFetchUsers(page).then(data => {
          console.log(data);
          setUsers(prevState => [...prevState, ...data]);
          setShowLoadBtn(true);
        });
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    cardsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    console.log(users);
    console.log(allUsers);
    if (users.length >= allUsers) {
      setShowLoadBtn(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users.length, allUsers]);

  const doFollowUser = (id, followers) => {
    setLoadingFollow(true);
    followUser(id, followers).then(() => {
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
    unfollowUser(id, followers).then(() => {
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
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <GoBackLink to="/">GO BACK</GoBackLink>
      <FilterBtnList
        filter={filter}
        setFilter={setFilter}
        statusFilters={statusFilters}
        setisStatusFiltersAll={setisStatusFiltersAll}
      />

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
      <LoaderContainer>{isLoading && <TweetsPageLoader />}</LoaderContainer>
      {showLoadBtn && isStatusFiltersAll && (
        <LoadMoreBtn
          onClick={() => {
            setPage(prevState => prevState + 1);
          }}
        >
          Load more
        </LoadMoreBtn>
      )}
      <div ref={cardsEndRef} />
    </CardContainer>
  );
};

export default Tweets;
