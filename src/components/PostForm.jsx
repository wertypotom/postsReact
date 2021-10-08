import React from "react";
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

const PostForm = function ({ createPost }) {
  const [post, setPost] = React.useState({
    title: "",
    body: "",
  });

  const createNewPost = (e) => {
    e.preventDefault();
    if (!post.title || !post.body) return;
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <form>
      <h1 style={{ textAlign: "center", marginBottom: "15px" }}>
        Enter your post
      </h1>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="post title"
      />
      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="post text"
      />
      <Button onClick={createNewPost}>Create post</Button>
    </form>
  );
};

export default PostForm;
