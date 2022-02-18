import React from 'react';
import Product from '../Product/Product';
import MenuTab from '../MenuTab/MenuTab';
import * as S from './ProductList.style';

export interface ProductProps {
  id: string;
  product: string;
  brand: string;
  nutrients: string | [];
  price: number;
  child: boolean;
}

const ProductList = ({
  currentPosts,
  totalPosts,
}: {
  currentPosts: ProductProps[];
  totalPosts: number;
}): JSX.Element => {
  return (
    <S.ProductListWrap>
      <MenuTab />
      <S.SearchAmount>
        <S.Span>총 {totalPosts}개</S.Span>의 검색결과가 있습니다.
      </S.SearchAmount>
      <Product currentPosts={currentPosts} />
    </S.ProductListWrap>
  );
};

export default ProductList;
