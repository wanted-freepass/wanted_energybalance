import React from 'react';
import * as S from './Pagination.style';

const PagiNation = ({
  postPerPage,
  totalPosts,
  paginate,
}: {
  postPerPage: number;
  totalPosts: number;
  paginate: (pageNum: number) => void;
}): JSX.Element => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  // pageNumbers

  return (
    <S.Container>
      <S.PageUl>
        {pageNumbers.map(number => (
          <S.PageLi key={number}>
            <S.PageSpan onClick={() => paginate(number)}>{number}</S.PageSpan>
          </S.PageLi>
        ))}
      </S.PageUl>
    </S.Container>
  );
};

export default PagiNation;
