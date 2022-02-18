import styled from 'styled-components';

export const Container = styled.div``;

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #000;
  border-width: 0 0 1px 0;
  font-size: 20px;
  color: #000;
  font-weight: 700;

  &::placeholder {
    color: #ddd;
    font-weight: ${props => props.theme.weightSemiBold};
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 8px;
  background: none;
  border: none;

  .search {
    width: 24px;
    height: 24px;
  }
`;
