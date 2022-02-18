import styled from 'styled-components';

export const Container = styled.div``;

export const ProductWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
`;

export const ProductConWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 100px;
`;

export const ProductContent = styled.div`
  padding: 12px 16px;
  font-size: 14px;
`;

export const BrandName = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
  color: #bbbbbb;
  line-height: 18px;
`;

export const ProductName = styled.p`
  font-weight: ${props => props.theme.weightSemiBold};
`;

export const EnrolledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 36px;
  border: 1px solid #000;
  border-radius: 18px;
  font-size: 16px;
  line-height: 34px;
  background: none;

  .plus {
    font-size: 22px;
  }
`;
