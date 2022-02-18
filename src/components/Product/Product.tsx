import React from 'react';
import * as S from './Product.style';
import { BsPlus } from 'react-icons/bs';

const Product = () => {
  return (
    <S.Container>
      <S.ProductWrap>
        <S.ProductConWrap>
          <S.ProductImage src="/images/medicine.png" />
          <S.ProductContent>
            <S.BrandName>뉴트리라이트</S.BrandName>
            <S.ProductName>코오롱리얼비타민C 프리미엄</S.ProductName>
          </S.ProductContent>
        </S.ProductConWrap>
        <S.ProductConWrap>
          <S.EnrolledButton>
            <BsPlus className="plus" />
            등록
          </S.EnrolledButton>
        </S.ProductConWrap>
      </S.ProductWrap>
    </S.Container>
  );
};

export default Product;
