import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
`;

export const FollowedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  height: 50px;
  font-size: 18px;
  line-height: 1.2;
  transition: transform 250ms ease-in, background-color 250ms ease-in;
  color: #373737;
  font-family: 'Montserrat-SemiBold';
  background-color: ${({ selected }) => (selected ? '#5cd3a8' : '#ebd8ff')};
  transform: ${({ selected }) => (selected ? 'scale(1.1)' : '#scale(1)')};

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #5cd3a8;
  }
`;
export const NotfollowedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  height: 50px;
  font-size: 18px;
  line-height: 1.2;
  transition: transform 250ms ease-in, background-color 250ms ease-in;
  color: #373737;
  font-family: 'Montserrat-SemiBold';
  background-color: ${({ selected }) => (selected ? '#5cd3a8' : '#ebd8ff')};
  transform: ${({ selected }) => (selected ? 'scale(1.1)' : '#scale(1)')};

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #5cd3a8;
  }
`;
export const AllButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  height: 50px;
  font-size: 18px;
  line-height: 1.2;
  transition: transform 250ms ease-in, background-color 250ms ease-in;
  color: #373737;
  font-family: 'Montserrat-SemiBold';
  background-color: ${({ selected }) => (selected ? '#5cd3a8' : '#ebd8ff')};
  transform: ${({ selected }) => (selected ? 'scale(1.1)' : '#scale(1)')};

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #5cd3a8;
  }
`;
