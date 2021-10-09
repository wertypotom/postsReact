import React from "react";
import Button from "./UI/Button/Button";
import { useHistory } from "react-router-dom";

const PostItem = ({ post, number, deletePost }) => {
  const router = useHistory();

  return (
    <div className="post">
      <div className="post__container">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>

        <Button
          onClick={() => router.push(`/posts/${post.id}`)}
          className="post__btn"
        >
          Open
        </Button>
        <Button onClick={() => deletePost(post)} className="post__btn">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
