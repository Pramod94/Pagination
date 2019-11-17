import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Paginate from './Paginate';

const Pagination = () => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
      setLoading(false);
    }
    fetchApi();
  }, []);

  // console.log(posts);
  // console.log(isLoading);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPost = posts.slice(0,5);
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost); 

const changePage = (number) => {
   return setCurrentPage(number);
  }

  return (
    <div>
      <h3>From Pagination</h3>
      <Posts loading={isLoading} posts={currentPost}/>
      <Paginate postsPerPage={postsPerPage} totalPosts={posts.length} pageChange={changePage} />
    </div>
  )
}

export default Pagination;
