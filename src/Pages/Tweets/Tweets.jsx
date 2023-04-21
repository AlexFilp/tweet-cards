import axios from 'axios';
import { useState, useEffect } from 'react';
import { CardContainer, CardList, GoBackLink, BtnList } from './Tweets.styled';
import { CardsItem } from '../../components/CardItem/CardsItem';
import { FilterButton } from '../../components/FilterButton/FilterButton';
import { PageLoader } from '../../components/PageLoader/PageLoader';

axios.defaults.baseURL = 'https://64425d6633997d3ef90e4627.mockapi.io';

async function fetchUsers() {
  const response = await axios.get('/tweets');
  return response.data;
}

async function followUser(id, followers, followed) {
  const response = await axios.put(`/tweets/${id}`, {
    followers: followers + 1,
    followed: true,
  });
  return response.data;
}

async function unfollowUser(id, followers, followed) {
  const response = await axios.put(`/tweets/${id}`, {
    followers: followers - 1,
    followed: false,
  });
  return response.data;
}

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

  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then(data => {
        console.log(data);
        setUsers(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const doFollowUser = (id, followers) => {
    setLoadingFollow(true);
    followUser(id, followers).then(data => {
      fetchUsers()
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
      fetchUsers()
        .then(data => {
          console.log(data);
          setUsers(data);
          setIsLoading(false);
          setLoadingFollow(false);
        })
        .catch(err => console.log(err));
    });
  };

  const getVisibleTasks = (users, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.notFollowed:
        return users.filter(user => user.followed === false);
      case statusFilters.followed:
        return users.filter(user => user.followed === true);
      default:
        return users;
    }
  };

  const visibleCards = getVisibleTasks(users, filter);

  return (
    <CardContainer>
      <GoBackLink to="/">GO BACK</GoBackLink>
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
      {isLoading ? (
        <PageLoader />
      ) : (
        <CardList>
          {visibleCards.map(
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
    </CardContainer>
  );
};

export default Tweets;
