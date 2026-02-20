import styled from "@emotion/styled";
import PageHeader from "../components/Header";
import DotMenuIcon from "../assets/dot.svg";
import EyeIcon from "../assets/open-eye.svg";
import HeartIcon from "../assets/heart.svg";
import ChatIcon from "../assets/chat.svg";
import ConfirmModal from "../components/ConfirmModal";
import { useState, useEffect } from "react";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  views: number;
  likes: number;
  comments: number;
  author: string;
  createdAt: string;
};

type Props = {
  posts?: Post[];
};

const dummyPosts: Post[] = [
  {
    id: 1,
    title: "솔크 보내기 싫은데 남친 생기는 법 좀 알려주세요ㅠㅠ",
    views: 63,
    likes: 63,
    comments: 63,
    author: "외로운 스코티시폴드",
    createdAt: "1시간 전",
  },
];

const MyPosts = ({ posts = dummyPosts }: Props) => {
  const navigate = useNavigate();

  const [postList, setPostList] = useState<Post[]>(posts);
  const [menuPostId, setMenuPostId] = useState<number | null>(null);
  const [targetPostId, setTargetPostId] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 2200);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleClickDot = (id: number) => {
    setMenuPostId((prev) => (prev === id ? null : id));
  };

  const openDeleteConfirm = (id: number) => {
    setMenuPostId(null);
    setTargetPostId(id);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (targetPostId === null) return;
    setPostList((prev) => prev.filter((post) => post.id !== targetPostId));
    setIsDeleteModalOpen(false);
    setTargetPostId(null);
    setToastMessage("✅ 게시글이 삭제되었습니다");
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setTargetPostId(null);
  };

  const handleEditPost = (id: number) => {
    setMenuPostId(null);
    // 🔽 나중에 퍼블리싱/상세 페이지와 머지할 경로
    navigate(`/posts/${id}/edit`);
  };

  return (
    <>
      {toastMessage && <Toast message={toastMessage} />}

      <Wrapper>
        <PageHeader title="게시글 관리" />

        <Inner>
          <MyPostLabel>내 게시글</MyPostLabel>
          <Divider />

          <PostList>
            {postList.map((post) => (
              <PostItem key={post.id}>
                <PostHeaderRow>
                  <PostTitle>{post.title}</PostTitle>

                  <DotButton onClick={() => handleClickDot(post.id)} aria-label="게시글 옵션">
                    <DotIcon src={DotMenuIcon} alt="" />
                  </DotButton>

                  {menuPostId === post.id && (
                    <MenuPopover>
                      <MenuButton onClick={() => handleEditPost(post.id)}>
                        수정하기
                      </MenuButton>
                      <MenuDivider />
                      <MenuButton onClick={() => openDeleteConfirm(post.id)}>
                        삭제하기
                      </MenuButton>
                    </MenuPopover>
                  )}
                </PostHeaderRow>

                <PostMetaRow>
                  <StatGroup>
                    <StatIcon src={EyeIcon} alt="" />
                    <StatText>{post.views}</StatText>
                  </StatGroup>

                  <StatGroup>
                    <StatIcon src={HeartIcon} alt="" />
                    <StatText>{post.likes}</StatText>
                  </StatGroup>

                  <StatGroup>
                    <StatIcon src={ChatIcon} alt="" />
                    <StatText>{post.comments}</StatText>
                  </StatGroup>
                </PostMetaRow>

                <PostFooterRow>
                  <AuthorName>{post.author}</AuthorName>
                  <DotSeparator>·</DotSeparator>
                  <TimeText>{post.createdAt}</TimeText>
                </PostFooterRow>
              </PostItem>
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

const PostItem = styled.article`
  position: relative;
  min-height: 97px;
  padding: 14px 12px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[3]};
`;

const PostHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const PostTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
`;

const DotButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const DotIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const MenuPopover = styled.div`
  position: absolute;
  top: 32px;
  right: 12px;

  width: 88px;

  display: flex;
  flex-direction: column;

  background: #ffffff;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.gray[3]};
  overflow: hidden;
`;

const MenuButton = styled.button`
  height: 36px;
  border: none;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.gray[4]};
  }
`;

const MenuDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.color.gray[3]};
`;

const PostMetaRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  gap: 12px;
`;

const StatGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const StatIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const StatText = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.color.gray[1]};
`;

const PostFooterRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  font-size: 12px;
`;

const AuthorName = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const DotSeparator = styled.span`
  margin: 0 4px;
`;

const TimeText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray[1]};
`;
