import { Link } from "react-router-dom";
import CreatePost from "../../components/community/CreatePost";
import NameBar from "../../components/community/NameBar";
import Post from "../../components/community/Post";
import Banner from "../../components/system/Banner";
import NavBar from "../../components/system/NavBar";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import type { PostType } from "../../types/posts.type";
import { getAllPost } from "../../api/posts";
import { getTimeAgo } from "../../utils/timeAgo";
import NoticePost from "../../components/community/NoticePost";

const WeeCommunity = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await getAllPost();
      setPosts(res);
    };

    getPosts();
  }, []);

  return (
    <Container>
      <NavBar text="또상 게시판" />
      <Banner SmallText="또래 상담부 친구들이 운영하는" BigText="또상 게시판" />
      <NameBar name="또상 게시판" />
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/wee-detail/${post.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <NoticePost
            title={post.title}
            views={post.views ?? 0}
            likes={post.likes ?? 0}
            comments={post.comments ?? 0}
            nickName={post.nickName}
            timeAgo={getTimeAgo(post.createdAt)}
          />
        </Link>
      ))}
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/wee-detail/${post.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Post
            title={post.title}
            views={post.views ?? 0}
            likes={post.likes ?? 0}
            comments={post.comments}
            nickName={post.nickName}
            timeAgo={getTimeAgo(post.createdAt)}
          />
        </Link>
      ))}
      <Link to="/write-post">
        <CreatePost />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default WeeCommunity;
