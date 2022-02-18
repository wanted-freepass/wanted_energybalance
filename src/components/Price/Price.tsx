import React, { useState } from 'react';
import * as S from './Price.style';

const Price = ({
  handleNumRange,
  range,
}: {
  handleNumRange: (e: string) => void;
  range: string;
}) => {
  const [lowerPrice, setLowerPrice] = useState('');
  const [upperPrice, setUpperPrice] = useState('');

  const handleLowerPrice = (e: any) => {
    setLowerPrice(e.target.value);
  };

  const handleUpperPrice = (e: any) => {
    setUpperPrice(e.target.value);
  };

  // const handleNumRange = (e: any) => {
  //   setRange(e.target.value);
  // };

  console.log(range);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Input
          type="number"
          min="0"
          max="150000"
          step="1000"
          value={lowerPrice
            .toLocaleString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          placeholder="최소 금액"
          onChange={handleLowerPrice}
        />
        <S.Input
          type="number"
          min="1000"
          max="150000"
          step="1000"
          placeholder="최대 금액"
          value={upperPrice
            .toLocaleString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          onChange={handleUpperPrice}
        />
        <S.Button>적용</S.Button>
      </S.Wrapper>
      <S.Wrapper>
        <S.Select name="" id="" onChange={(e: any) => handleNumRange(range)}>
          <option>전체</option>
          <option>30,000원 이하</option>
          <option>30,000원 ~ 50,000원</option>
          <option>50,000원 ~ 100,000원</option>
          <option>100,000원 ~ 150,000원</option>
        </S.Select>
      </S.Wrapper>
    </S.Container>
  );
};

export default Price;
