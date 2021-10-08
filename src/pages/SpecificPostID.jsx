import React from "react";
import { useParams } from "react-router-dom";
import PostServise from "../API/PostServise";
import { useFetching } from "../hooks/useFetching";
import Preloader from "../components/UI/Preloader/Preloader";

function SpecificPostID() {
  const params = useParams();
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);

  const [fetchPostsByID, isLoading, error] = useFetching(async (id) => {
    const response = await PostServise.getByID(id);
    setPost(response.data);
  });

  const [fetchComments, isCommentLoading, errorComments] = useFetching(
    async (id) => {
      const response = await PostServise.getCommentByID(id);
      setComments(response.data);
    }
  );

  React.useEffect(() => {
    fetchPostsByID(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Hi there with ID {params.id}</h1>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          {post.id}, {post.title}
        </div>
      )}
      <h1>Comments: </h1>
      {isCommentLoading ? (
        <Preloader />
      ) : (
        <div>
          {comments.map((com) => {
            return (
              <div key={com.id} style={{ marginTop: 15 }}>
                <h5>{com.email}</h5>
                <div>{com.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SpecificPostID;
