import React from 'react';
import * as S from './Price.style';

const Price = () => {
  return (
    <S.Container>
      <S.Input type="number" /> <S.Input type="number" />
      <button>적용</button>
      <select name="" id="">
        <option>10,000 ~ 30,000</option>
        <option>30,000 ~ 50,000</option>
        <option>50,000 ~ 100,000</option>
        <option>100,000 ~ 150,000</option>
      </select>
    </S.Container>
  );
};

export default Price;
