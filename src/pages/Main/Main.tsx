import React from 'react';
import Search from '../../components/Search';
import * as S from './Main.style';
import ProductList from '../../components/ProductList/ProductList';

const Main = () => {
  return (
    <S.Container>
      <Search />
      <ProductList />
    </S.Container>
  );
};

export default Main;
