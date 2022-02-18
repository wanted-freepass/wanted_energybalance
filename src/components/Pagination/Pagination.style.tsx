import styled from 'styled-components';

export const Container = styled.div``;

export const PageUl = styled.ul`
  ${props => props.theme.flex()}
  flex-wrap: wrap;
  margin: 20px 0;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
`;

export const PageLi = styled.li`
  width: 25px;
  padding: 6px 4px 3px 4px;
  margin: 4px;
  color: ${props => props.theme.darkGray};
  border-radius: 4px;
  background-color: ${props => props.theme.mediumGray};
  font-size: 16px;
  font-weight: 600;

  &:hover {
    color: white;
    background-color: ${props => props.theme.blue};
    cursor: pointer;
  }
  &:focus {
    color: white;
    background-color: ${props => props.theme.blue};
  }
`;

export const PageSpan = styled.span`
  &:focus {
    color: white;
    background-color: ${props => props.theme.blue};
  }
`;
