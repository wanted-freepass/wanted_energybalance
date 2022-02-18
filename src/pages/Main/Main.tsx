import React from 'react';
import Search from '../../components/Search';
import Price from '../../components/Price';
import * as S from './Main.style';

const Main = () => {
  return (
    <S.Container>
      <Search />
      <Price />
    </S.Container>
  );
};

export default Main;
