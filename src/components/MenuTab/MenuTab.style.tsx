import styled from 'styled-components';

export const TabWrap = styled.ul`
  display: flex;
  height: 28px;
  margin-bottom: 36px;
  border-bottom: 1px solid #bbbbbb;
`;

export const Tab = styled.li`
  margin-right: 15px;
  cursor: pointer;

  /* &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 4px;
    background: #000;
  } */
`;
