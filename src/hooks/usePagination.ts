import { useState } from 'react';
import { ProductProps } from '../components/ProductList/ProductList';

export const usePagination = (productData: ProductProps[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage: number = 10;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPosts = productData.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return [currentPosts, postPerPage];
};
