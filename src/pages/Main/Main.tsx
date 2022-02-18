import React, { useState, useEffect } from 'react';
import Search from '../../components/Search';
import Price from '../../components/Price';
import * as S from './Main.style';
import ProductList from '../../components/ProductList/ProductList';
import { ProductProps } from '../../components/ProductList/ProductList';
import { BiWon } from 'react-icons/bi';
import PagiNation from '../../components/Pagination';

const Main = (): JSX.Element => {
  const [productData, setProductData] = useState<ProductProps[]>([]);

  const [isModal, setIsModal] = useState(false);
  const clickModal = () => {
    setIsModal(prev => !prev);
  };

  useEffect(() => {
    fetch('data/energybalanceList.json')
      .then(res => res.json())
      .then(res => setProductData(res));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage: number = 10;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = productData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum: number) => setCurrentPage(pageNum);

  return (
    <S.Container>
      <Search />
      <S.PriceModal>
        <S.Button onClick={clickModal} isModal={isModal}>
          <BiWon />
          가격
        </S.Button>
        <S.Wrapper>{isModal && <Price />}</S.Wrapper>
      </S.PriceModal>
      <ProductList
        currentPosts={currentPosts}
        totalPosts={productData.length}
      />
      <PagiNation
        postPerPage={postPerPage}
        totalPosts={productData.length}
        paginate={paginate}
      />
    </S.Container>
  );
};

export default Main;
