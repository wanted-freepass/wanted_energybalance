import React, { useState, useEffect } from 'react';
import Search from '../../components/Search';
import Price from '../../components/Price';
import * as S from './Main.style';
import ProductList from '../../components/ProductList/ProductList';
import { ProductProps } from '../../components/ProductList/ProductList';
import { BiWon } from 'react-icons/bi';

const Main = (): JSX.Element => {
  const [productData, setProductData] = useState<ProductProps[]>([]);
  const [isModal, setIsModal] = useState(false);
  const clickModal = () => {
    setIsModal(prev => !prev);
  };

  useEffect(() => {
    fetch('data/energybalanceList.json')
      .then(res => res.json())
      .then(res => setProductData(res));
  }, []);

  return (
    <S.Container>
      <Search />
      <S.PriceModal>
        <S.Button onClick={clickModal} isModal={isModal}>
          <BiWon />
          가격
        </S.Button>
        <S.Wrapper>{isModal && <Price />}</S.Wrapper>
      </S.PriceModal>
      <ProductList productData={productData} />
    </S.Container>
  );
};

export default Main;
