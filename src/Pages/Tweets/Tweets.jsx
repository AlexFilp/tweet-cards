import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import {
  CardContainer,
  CardList,
  GoBackLink,
  LoadMoreBtn,
  LoaderContainer,
} from './Tweets.styled';
import { ScrollUpButton } from '../../components/ScrollUpBtn/ScrollUpBtn';
import { CardsItem } from '../../components/CardItem/CardsItem';
import { FilterBtnList } from '../../components/FilterBtnList/FilterBtnList';
import { TweetsPageLoader } from '../../components/PageLoader/TweetsPageLoader';
import { PageLoader } from '../../components/PageLoader/PageLoader';
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
  const [isFirstLoading, setIsFirstLoading] = useState(true);
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
          setUsers(prevState => [...prevState, ...data]);
          setShowLoadBtn(true);
        });
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
        setIsFirstLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    cardsEndRef.current.scrollIntoView({ behavior: 'smooth' });
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
          setUsers(data);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setLoadingFollow(false);
        });
    });
  };

  const doUnfollowUser = (id, followers) => {
    setLoadingFollow(true);
    unfollowUser(id, followers).then(() => {
      fetchUsers(page)
        .then(data => {
          setUsers(data);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setLoadingFollow(false);
        });
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
      {isFirstLoading && (
        <LoaderContainer>
          <PageLoader />
        </LoaderContainer>
      )}
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
      {showLoadBtn && isStatusFiltersAll && (
        <LoadMoreBtn
          onClick={() => {
            setPage(prevState => prevState + 1);
          }}
        >
          {isLoading ? <TweetsPageLoader /> : 'Load More'}
        </LoadMoreBtn>
      )}
      <ScrollUpButton />
      <div ref={cardsEndRef} />
    </CardContainer>
  );
};

export default Tweets;
