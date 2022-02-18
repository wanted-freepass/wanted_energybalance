import React from 'react';
import * as S from './MenuTab.style';

export default function MenuTab() {
  return (
    <S.TabWrap>
      <S.Tab>제품명</S.Tab>
      <S.Tab>브랜드명</S.Tab>
      <S.Tab>아동용</S.Tab>
    </S.TabWrap>
  );
}
