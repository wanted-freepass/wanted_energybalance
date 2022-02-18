import React, { useState } from 'react';
import Search from '../../components/Search';
import Price from '../../components/Price';
import * as S from './Main.style';
import ProductList from '../../components/ProductList/ProductList';
import { BiWon } from 'react-icons/bi';

const Main = () => {
  const [isModal, setIsModal] = useState(false);

  const clickModal = () => {
    setIsModal(prev => !prev);
  };

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
      <ProductList />
    </S.Container>
  );
};

export default Main;
