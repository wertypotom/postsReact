import React from "react";

export const useSortedPosts = (posts, sort) => {
  // instantly sorting posts from the beginning
  const sortedPosts = React.useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

export const useSort = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  // searching and sorting instantly and passing it to PostList
  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPosts.filter((post) => {
      return post.title.toLowerCase().includes(query);
    });
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
