import React from 'react';
import * as S from './Product.style';
import { BsPlus } from 'react-icons/bs';
import { ProductProps } from '../ProductList/ProductList';

const Product = ({
  sortedData,
}: {
  sortedData: ProductProps[];
}): JSX.Element => {
  return (
    <div>
      {sortedData.map(product => {
        return (
          <S.Container key={product.id}>
            <S.ProductWrap>
              <S.ProductConWrap>
                <S.ProductImage src="/images/medicine.png" />
                <S.ProductContent>
                  <S.BrandName>{product.brand}</S.BrandName>
                  <S.ProductName>{product.product}</S.ProductName>
                  <S.ProductPrice>
                    {product.price.toLocaleString()}
                  </S.ProductPrice>
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
      })}
    </div>
  );
};

export default Product;
