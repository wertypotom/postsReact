import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const PostList = ({ posts, title, deletePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Posts didn't found</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              deletePost={deletePost}
              number={index + 1}
              post={post}
              key={post.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
