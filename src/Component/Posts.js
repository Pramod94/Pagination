import React from 'react';
import '../CSS/Posts.css';
import 'bootstrap/dist/css/bootstrap.css';

const Posts = ({ loading, posts }) => {
  if (loading) {
    return <h3>Loading ...</h3>
  }

  return (
    <div>
      <h3>Posts</h3>
      <ul className="list-item">
      {
        posts.map((post) => {
          return (
            <li className="list-group-item list-group-item-action" key={post.id}>{post.title}</li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default Posts;
