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
import type { NoticeType } from "../../types/notices.type";
import { getAllNotice } from "../../api/notices";
import { theme } from "../../style/theme";

const POSTS_PER_PAGE = 10;

const WeeCommunity = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [notices, setNotices] = useState<NoticeType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchAll = async () => {
      const [postsRes, noticesRes] = await Promise.allSettled([
        getAllPost(),
        getAllNotice(),
      ]);
      if (postsRes.status === "fulfilled") setPosts(postsRes.value ?? []);
      if (noticesRes.status === "fulfilled") setNotices(noticesRes.value ?? []);
    };

    fetchAll();
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <Container>
      <NavBar text="또상 게시판" />
      <Banner SmallText="또래 상담부 친구들이 운영하는" BigText="또상 게시판" />
      <NameBar name="또상 게시판" />

      {notices.length > 0 &&
        notices.map((notice) => (
          <Link
            key={notice.id}
            to={`/notice-detail/${notice.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <NoticePost
              title={notice.title}
              views={0}
              likes={0}
              comments={0}
              nickName={notice.writerId}
              timeAgo={getTimeAgo(notice.createdAt)}
            />
          </Link>
        ))}

      {paginatedPosts.map((post) => (
        <Link
          key={post.id}
          to={`/wee-detail/${post.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Post
            title={post.title}
            views={post.viewCount}
            likes={post.heartCount}
            comments={0}
            nickName={post.nickName}
            timeAgo={getTimeAgo(post.createdAt)}
            hearted={post.hearted}
          />
        </Link>
      ))}

      {totalPages > 1 && (
        <Pagination>
          <PageButton
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            이전
          </PageButton>
          <PageInfo>
            {currentPage} / {totalPages}
          </PageInfo>
          <PageButton
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            다음
          </PageButton>
        </Pagination>
      )}

      <Link to="/write-post">
        <CreatePost />
      </Link>
    </Container>
  );
};

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
`;

const PageButton = styled.button`
  background: none;
  border: 1px solid ${theme.color.gray[2]};
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  color: ${theme.color.gray[1]};

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

const PageInfo = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${theme.color.gray[1]};
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default WeeCommunity;
