import React from "react";
import { useQuery } from "react-query";

import { PostProps } from "../../types/Post.types";
import { PostsService } from "../../api/posts/posts";
import { Post } from "../Post/Post";
import Pagination from "../Pagination/Pagination";

export const Posts = () => {
  const [posts, setPosts] = React.useState<PostProps[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);

  const { data: { data } = {} } = useQuery(["posts"], PostsService.getPosts, {
    onSuccess: ({ data }) => setPosts(data),
  });

  const currentPosts = React.useMemo(() => {
    const indexOfLastPost = currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    return posts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, perPage, posts]);

  return (
    <div className="app">
      {currentPosts.map((post: any) => (
        <Post key={post.id} title={post.title} />
      ))}
      <Pagination
        perPage={perPage}
        totalCount={data?.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        siblingCount={1}
      />
    </div>
  );
};
