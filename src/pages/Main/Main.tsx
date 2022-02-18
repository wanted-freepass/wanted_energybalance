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
  // const [price, setPrice] = useState();
  const [range, setRange] = useState('');
  const postPerPage: number = 10;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const clickModal = () => {
    setIsModal(prev => !prev);
  };

  useEffect(() => {
    fetch('data/energybalanceList.json')
      .then(res => res.json())
      .then(res => setProductData(res));
  }, []);

  const handleNumRange = (e: any) => {
    setRange(e.target.value);
  };
  console.log(range);

  // const numRange = (range: any) => {
  //   setPrice(range);
  //   console.log(range);
  // };

  const [product, setProduct] = useState('');
  const [userInput, setUserInput] = useState('');

  const handle = (e: any) => {
    setUserInput(e.target.value);
    console.log(e.target);
  };

  console.log(userInput);
  const currentPosts = productData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum: number) => setCurrentPage(pageNum);

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
      <ProductList
        currentPosts={currentPosts}
        totalPosts={productData.length}
        productData={productData}
        userInput={userInput}
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
