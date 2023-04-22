import axios from 'axios';

axios.defaults.baseURL = 'https://64425d6633997d3ef90e4627.mockapi.io';

export async function fetchAllCards() {
  const response = await axios.get('/tweets');
  return response.data;
}

export async function firstFetchUsers(page) {
  const response = await axios.get(`/tweets?page=${page}&limit=3`);
  return response.data;
}

export async function fetchUsers(page) {
  const response = await axios.get(`/tweets?page=1&limit=${page * 3}`);
  return response.data;
}

export async function followUser(id, followers) {
  const response = await axios.put(`/tweets/${id}`, {
    followers: followers + 1,
    followed: true,
  });
  return response.data;
}

export async function unfollowUser(id, followers) {
  const response = await axios.put(`/tweets/${id}`, {
    followers: followers - 1,
    followed: false,
  });
  return response.data;
}

/* <Wrapper onClick={handleChange} isClick={isClick} />;

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ isClick }) => (isClick ? 'green' : 'red')};
`;

const handleChange = () => {
  setIsCLick(prev => !prev);
}; */
