import React, { useEffect, useState } from "react";
import BoardHeader from "../../components/community/BoardHeader";
import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import blankHeart from "../../assets/heart.svg";
import filledHeart from "../../assets/heart-filled.svg";
import Comment from "../../components/community/Comment";
import BottomInput from "../../components/system/BottomInput";
import { PostDetailType } from "../../types/posts.type";
import { NoticeType } from "../../types/notices.type";
import { AnswerType } from "../../types/answers.type";
import { useParams } from "react-router-dom";
import { getPostDetail, likePost } from "../../api/posts";
import { getPostDetail as getNoticeDetail } from "../../api/notices";
import {
  getAnswers,
  createAnswer,
  likeAnswer,
  deleteAnswer,
} from "../../api/answers";

interface Props {
  isNotice?: boolean;
}

const WeeDetail = ({ isNotice = false }: Props) => {
  const { postId, noticeId } = useParams();
  const [postDetail, setPostDetail] = useState<PostDetailType>();
  const [notice, setNotice] = useState<NoticeType>();
  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const [commentInput, setCommentInput] = useState("");

  const fetchData = async () => {
    if (isNotice) {
      if (!noticeId) return;
      try {
        const res = await getNoticeDetail(noticeId);
        setNotice(res);
      } catch {
        setNotice(undefined);
      }
      return;
    }

    if (!postId) return;
    const [detailRes, answersRes] = await Promise.all([
      getPostDetail(postId),
      getAnswers(postId),
    ]);
    setPostDetail(detailRes);
    setAnswers(answersRes);
  };

  const handleSubmitAnswer = async () => {
    if (!postId || !commentInput.trim()) return;
    try {
      await createAnswer(postId, commentInput);
      setCommentInput("");
      const updatedAnswers = await getAnswers(postId);
      setAnswers(updatedAnswers);
    } catch (e) {
      alert("댓글 작성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handlePostLike = async () => {
    if (!postId) return;
    try {
      await likePost(postId);
      const updateContent = await getPostDetail(postId);
      setPostDetail(updateContent);
    } catch (e) {
      alert("좋아요가 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleAnswerLike = async (answerId: string) => {
    if (!postId || !answerId) return;
    try {
      await likeAnswer(answerId);
      const updatedAnswers = await getAnswers(postId);
      setAnswers(updatedAnswers);
    } catch (e) {
      alert("좋아요가 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleDeleteAnswer = async (answerId: string) => {
    if (!postId) return;
    try {
      await deleteAnswer(answerId);
      const updatedAnswers = await getAnswers(postId);
      setAnswers(updatedAnswers);
    } catch {
      alert("삭제할 수 없는 댓글입니다.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [postId, noticeId]);

  if (isNotice) {
    if (!notice) return null;
    return (
      <div>
        <Container>
          <BoardHeader
            title={notice.title}
            author={notice.writerId}
            date={notice.createdAt}
            views={0}
          />
          <ContentSection>
            <div>
              {notice.content.split("\n").map((line: string, idx: number) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </ContentSection>
        </Container>
      </div>
    );
  }

  if (!postDetail) return null;

  return (
    <div>
      <Container>
        <BoardHeader
          title={postDetail.title}
          author={postDetail.nickName}
          date={postDetail.createdAt}
          views={postDetail.viewCount}
        />
        <ContentSection>
          <div>
            {postDetail.content.split("\n").map((line: string, idx: number) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>

          <LikeWrap>
            <Like hearted={postDetail.hearted} onClick={handlePostLike}>
              {postDetail.heartCount}
              <img
                src={postDetail.hearted ? filledHeart : blankHeart}
                alt="좋아요"
              />
            </Like>
          </LikeWrap>
        </ContentSection>
        <CommentSection>
          <Separate>댓글</Separate>
          {answers.map((answer) => (
            <Comment
              handleLike={() => handleAnswerLike(answer.id)}
              key={answer.id}
              nickName={answer.nickName}
              answer={answer.answer}
              likes={answer.heartCount}
              hearted={answer.hearted}
              handleDelete={() => handleDeleteAnswer(answer.id)}
            />
          ))}
          <InputSpacer />
        </CommentSection>
        <BottomInput
          placeholder="댓글 남기기"
          value={commentInput}
          onChange={setCommentInput}
          onSubmit={handleSubmitAnswer}
        />
      </Container>
    </div>
  );
};

const InputSpacer = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
`;

const Separate = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  font-size: 15px;
  font-weight: 700;
  background-color: ${theme.color.gray[3]};
  border-bottom: 1px solid ${theme.color.gray[1]};
  color: ${theme.color.gray[1]};
`;
const CommentSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const LikeWrap = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  img {
    width: 18px;
    height: 18px;
  }
`;
const Like = styled.div<{ hearted?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 4px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ hearted }) => (hearted ? "#ff4d4d" : theme.color.gray[1])};
  align-items: center;
  cursor: pointer;
`;
const ContentSection = styled.section`
  width: 100%;
  min-height: 418px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
  color: black;
  padding: 12px 16px;
  line-height: 150%;
  gap: 12px;
`;

export default WeeDetail;
