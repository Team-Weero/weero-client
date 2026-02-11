import React, { useEffect, useState } from "react";
import BoardHeader from "../../components/community/BoardHeader";
import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import blankHeart from "../../assets/heart.svg";
import Comment from "../../components/community/Comment";
import BottomInput from "../../components/system/BottomInput";
import { PostType } from "../../types/posts.type";
import { AnswerType } from "../../types/answers.type";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../../api/posts";
import { getAllPost as getAnswers } from "../../api/answers";

const WeeDetail = () => {
  const { postId } = useParams();
  const [postDetail, setPostDetail] = useState<PostType>();
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!postId) return;
      const [detailRes, answersRes] = await Promise.all([
        getPostDetail(postId),
        getAnswers(postId),
      ]);
      setPostDetail(detailRes);
      setAnswers(answersRes);
    };
    fetchData();
  }, [postId]);

  if (!postDetail) return null;

  return (
    <div>
      <Container>
        <BoardHeader
          title={postDetail.title}
          author={postDetail.nickName}
          date={postDetail.createdAt}
          views={postDetail.views}
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
            <Like>
              {postDetail.likes}
              <img src={blankHeart} alt="좋아요" />
            </Like>
          </LikeWrap>
        </ContentSection>
        <CommentSection>
          <Separate>댓글</Separate>
          {answers.map((answer) => (
            <Comment
              key={answer.id}
              nickName={answer.nickName}
              answer={answer.answer}
              //likes={answer.like}
            />
          ))}
          <InputSpacer />
        </CommentSection>
        <BottomInput placeholder="댓글 남기기" />
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
  display: flex;
  justify-content: flex-end;
  img {
    width: 18px;
    height: 18px;
  }
`;
const Like = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  font-size: 15px;
  font-weight: 500;
  color: ${theme.color.gray[1]};
  align-items: center;
  cursor: pointer;
`;
const ContentSection = styled.section`
  width: 100%;
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
