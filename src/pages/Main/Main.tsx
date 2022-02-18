import React, { useState, useEffect } from 'react';
import Search from '../../components/Search';
import * as S from './Main.style';
import ProductList from '../../components/ProductList/ProductList';
import { ProductProps } from '../../components/ProductList/ProductList';

const Main = (): JSX.Element => {
  const [productData, setProductData] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch('data/energybalanceList.json')
      .then(res => res.json())
      .then(res => setProductData(res));
  }, []);

  return (
    <S.Container>
      <Search />
      <ProductList productData={productData} />
    </S.Container>
  );
};

export default Main;
