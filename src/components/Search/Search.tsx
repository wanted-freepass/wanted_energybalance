import React, { useState } from 'react';
import * as S from './Search.style';
import { BsSearch } from 'react-icons/bs';

const Search = ({
  userInput,
  handle,
}: {
  userInput: any;
  handle: (e: any) => void;
}) => {
  return (
    <S.Container>
      <S.InputWrap>
        <S.Input
          placeholder="브랜드명 또는 영양제 이름 검색"
          type="text"
          value={userInput}
          onChange={handle}
        />
        <S.Button onClick={handle}>
          <BsSearch className="search" />
        </S.Button>
      </S.InputWrap>
    </S.Container>
  );
};

export default Search;
