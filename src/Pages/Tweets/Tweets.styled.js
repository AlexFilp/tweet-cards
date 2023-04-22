import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardList = styled.ul`
  display: flex;
  width: calc(380px * 3 + 40px);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const GoBackLink = styled(Link)`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  height: 50px;
  font-size: 18px;
  line-height: 1.2;
  transition: transform 250ms ease-in;
  color: #373737;
  font-family: 'Montserrat-SemiBold';

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  height: 50px;
  font-size: 18px;
  line-height: 1.2;
  transition: transform 250ms ease-in, background-color 250ms ease-in;
  color: #373737;
  font-family: 'Montserrat-SemiBold';
  margin-top: 10px;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #5cd3a8;
  }
`;

export const LoaderContainer = styled.div`
  margin-top: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
