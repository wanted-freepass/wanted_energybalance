import React from 'react';
import * as S from './Product.style';
import { BsPlus } from 'react-icons/bs';
import { ProductProps } from '../ProductList/ProductList';

const Product = ({
  currentPosts,
}: {
  currentPosts: ProductProps[];
}): JSX.Element => {
  return (
    <div>
      {currentPosts.map(product => {
        return (
          <S.Container key={product.id}>
            <S.ProductWrap>
              <S.ProductConWrap>
                <S.ProductImage src="/images/medicine.png" />
                <S.ProductContent>
                  <S.BrandName>{product.brand}</S.BrandName>
                  <S.ProductName>{product.product}</S.ProductName>
                  <S.ProductName>{product.price}</S.ProductName>
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
