import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Paginate = ({ postsPerPage, totalPosts, pageChange }) => {

  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {
          pageNumbers.map(number => {
            return <li className="page-item">
              <a onClick={() => pageChange(number)} href="#" className="page-link">{number}</a>
            </li>
          })
        }
      </ul>
    </nav>
  )
}

export default Paginate;
