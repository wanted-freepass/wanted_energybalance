import React, { useState } from 'react';
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
  userInput,
  currentPosts,
  totalPosts,
}: {
  productData: ProductProps[];
  userInput: string;
  currentPosts: ProductProps[];
  totalPosts: number;
}): JSX.Element => {
  const [isClicked, setIsClicked] = useState(true);
  const [clickedTab, setClickedTab] = useState('');

  const sortedData = currentPosts.filter(medicine => {
    return medicine.product.includes(userInput);
  });

  const onClick = (e: any) => {
    setClickedTab(e.target.innerText);
  };

  const onClickedTab = (e: any) => {
    if (e.target.innerText === clickedTab) {
      setIsClicked(prev => prev);
    } else {
      setIsClicked(prev => !prev);
    }
  };

  console.log(sortedData);

  return (
    <S.ProductListWrap>
      <S.TabWrap>
        <S.Tab onClick={onClick}>제품명</S.Tab>
        <S.Tab onClick={onClick}>브랜드명</S.Tab>
        <S.Tab onClick={onClick}>아동용</S.Tab>
      </S.TabWrap>
      {userInput.length >= 1 && (
        <S.SearchAmount>
          <S.Span>총 {sortedData.length}개 </S.Span>의 검색결과가 있습니다.
        </S.SearchAmount>
      )}
      {userInput.length >= 1 && <Product sortedData={sortedData} />}
    </S.ProductListWrap>
  );
};

export default ProductList;
