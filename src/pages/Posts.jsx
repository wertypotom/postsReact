import React from "react";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Modal from "../components/UI/Modal/Modal";
import Button from "../components/UI/Button/Button";
import "../styles/App.css";
import { useSort } from "../hooks/usePost";
import PostServise from "../API/PostServise";
import Preloader from "../components/UI/Preloader/Preloader";
import { useFetching } from "../hooks/useFetching";
import { getPagesArray, getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";

function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({ sort: "", query: "" });
  const [modal, setModal] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const sortedAndSearchedPosts = useSort(posts, filter.sort, filter.query);

  const [fetchPosts, postsIsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostServise.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  React.useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changedPage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <Button style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </Modal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1 style={{ textAlign: "center" }}>Error has happened</h1>}
      {postsIsLoading && (
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <Preloader />
        </div>
      )}

      <PostList
        deletePost={deletePost}
        posts={sortedAndSearchedPosts}
        title="Posts about JS"
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        changedPage={changedPage}
      />
    </div>
  );
}

export default Posts;
