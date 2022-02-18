import styled from 'styled-components';

export const Container = styled.div`
  padding: 64px 20px 0;
`;

export const PriceModal = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
`;

export const Button = styled.button`
  width: 60px;
  padding: 6px 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #fc8585;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isModal }: { isModal: boolean }) =>
    isModal ? '#fc8585' : '#fff'};
  color: ${({ isModal }: { isModal: boolean }) =>
    isModal ? '#fff' : '#fc8585'};
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 45px;
`;
