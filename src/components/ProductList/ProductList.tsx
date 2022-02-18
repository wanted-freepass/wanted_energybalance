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
  productData,
}: {
  productData: ProductProps[];
}): JSX.Element => {
  return (
    <S.ProductListWrap>
      <MenuTab />
      <S.SearchAmount>
        <S.Span>총 {productData.length}개</S.Span>의 검색결과가 있습니다.
      </S.SearchAmount>
      <Product productData={productData} />
    </S.ProductListWrap>
  );
};

export default ProductList;
