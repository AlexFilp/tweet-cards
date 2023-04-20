import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  position: relative;
  padding-top: 214px;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  text-align: center;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const CardIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const CardImage = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const BoyImg = styled.img`
  position: absolute;
  top: 180px;
  left: 150px;
`;

export const Line = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  margin-bottom: 45px;
`;

export const HomeTitle = styled.h1`
  font-size: 40px;
  color: #ebd8ff;
  margin-bottom: 55px;
  font-family: 'Montserrat-Medium';
  letter-spacing: 3px;
`;

export const HomeLink = styled(NavLink)`
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
  transition: background-color 250ms ease-in;
  color: #373737;
  font-family: 'Montserrat-SemiBold';

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
