import styled from "@emotion/styled";
import PageHeader from "../components/Header";
import ConfirmModal from "../components/ConfirmModal";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Post from "../components/community/Post";
import { PostType } from "../types/posts.type";
import { getTimeAgo } from "../utils/timeAgo";
import { getMyPost } from "../api/posts";

const MyPosts = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<PostType[]>([]);
  const [targetPostId, setTargetPostId] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleConfirmDelete = () => {
    if (targetPostId === null) return;
    setPostList((prev) => prev.filter((post) => post.id !== targetPostId));
    setIsDeleteModalOpen(false);
    setTargetPostId(null);
    Swal.fire({
      icon: "success",
      title: "게시글이 삭제되었습니다",
      timer: 2200,
      showConfirmButton: false,
      toast: true,
      position: "top",
    });
  };

  useEffect(() => {
    const getPosts = async () => {
      const res = await getMyPost();
      setPostList(res);
    };

    getPosts();
  }, []);

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setTargetPostId(null);
  };

  return (
    <>
      <Wrapper>
        <PageHeader title="게시글 관리" />

        <Inner>
          <MyPostLabel>내 게시글</MyPostLabel>
          <Divider />

          <PostList>
            {postList.map((post) => (
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
                  onEdit={() => navigate(`/posts/${post.id}/edit`)}
                  onDelete={() => {
                    setTargetPostId(post.id);
                    setIsDeleteModalOpen(true);
                  }}
                />
              </Link>
            ))}
          </PostList>
        </Inner>

        <ConfirmModal
          open={isDeleteModalOpen}
          message="게시물을 삭제하시겠습니까?"
          cancelLabel="취소"
          confirmLabel="삭제"
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      </Wrapper>
    </>
  );
};

export default MyPosts;

const Wrapper = styled.div`
  position: relative;
`;

const Inner = styled.div``;

const MyPostLabel = styled.p`
  margin: 17px 334px 17px 12px;
  font-size: 15px;
  font-weight: 700;
`;

const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[3]};
`;

const PostList = styled.div`
  width: 100%;
`;
