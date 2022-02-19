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
  const [currentPage, setCurrentPage] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [product, setProduct] = useState('');
  const [userInput, setUserInput] = useState('');
  const [range, setRange] = useState('');

  const postPerPage = 10;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const clickModal = () => {
    setIsModal(prev => !prev);
  };

  const handle = (e: any) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    fetch('data/energybalanceList.json')
      .then(res => res.json())
      .then(res => setProductData(res));
  }, []);

  const handleNumRange = (e: any) => {
    setRange(e.target.value);
  };
  // const numRange = (range: any) => {
  //   setPrice(range);
  //   console.log(range);
  // };

  const currentPosts = productData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum: number) => setCurrentPage(pageNum);

  const sortedData = productData.filter(medicine => {
    return medicine.product.includes(userInput);
  });

  return (
    <S.Container>
      <Search handle={handle} userInput={userInput} />
      <S.PriceModal>
        <S.Button onClick={clickModal} isModal={isModal}>
          <BiWon />
          가격
        </S.Button>
        <S.Wrapper>
          {isModal && <Price handleNumRange={handleNumRange} range={range} />}
        </S.Wrapper>
      </S.PriceModal>

      <ProductList productData={productData} userInput={userInput} />
      <PagiNation
        postPerPage={postPerPage}
        sortedData={sortedData.length}
        paginate={paginate}
        userInput={userInput}
        currentPosts={currentPosts}
      />
    </S.Container>
  );
};

export default Main;
