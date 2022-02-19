import React from 'react';
import * as S from './Pagination.style';
import { ProductProps } from '../ProductList/ProductList';

const PagiNation = ({
  postPerPage,
  sortedData,
  paginate,
  userInput,
  currentPosts,
}: {
  postPerPage: number;
  sortedData: number;
  paginate: (pageNum: number) => void;
  userInput: string;
  currentPosts: ProductProps[];
}): JSX.Element => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedData / postPerPage); i++) {
    pageNumbers.push(i);
  }

  // pageNumbers

  return (
    <S.Container>
      {userInput && (
        <S.PageUl>
          {pageNumbers.map(number => (
            <S.PageLi key={number}>
              <S.PageSpan onClick={() => paginate(number)}>{number}</S.PageSpan>
            </S.PageLi>
          ))}
        </S.PageUl>
      )}
    </S.Container>
  );
};

export default PagiNation;
