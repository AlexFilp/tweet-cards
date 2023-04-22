import styled from 'styled-components';
import { BsFillFileArrowUpFill } from 'react-icons/bs';
import 'animate.css';

export const ScrollUpContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 50px;
  z-index: 99;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const ScrollBtn = styled(BsFillFileArrowUpFill)`
  color: #5736a3;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: transform 100ms ease-in;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
