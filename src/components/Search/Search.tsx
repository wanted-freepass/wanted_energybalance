import React from 'react';
import * as S from './Search.style';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <S.Container>
      <S.InputWrap>
        <S.Input placeholder="브랜드명 또는 영양제 이름 검색" type="text" />
        <S.Button>
          <BsSearch className="search" />
        </S.Button>
      </S.InputWrap>
    </S.Container>
  );
};

export default Search;
