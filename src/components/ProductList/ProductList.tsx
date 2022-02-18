import React from 'react';
import Product from '../Product/Product';
import MenuTab from '../MenuTab/MenuTab';
import * as S from './ProductList.style';

const ProductList = () => {
  return (
    <S.ProductListWrap>
      <MenuTab />
      <S.SearchAmount>
        <S.Span>총 0개</S.Span>의 검색결과가 있습니다.
      </S.SearchAmount>
      <Product />
      <Product />
    </S.ProductListWrap>
  );
};

export default ProductList;
