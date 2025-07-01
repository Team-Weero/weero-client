import React from "react";
import BoardHeader from "../../components/community/BoardHeader";
import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import blankHeart from "../../assets/heart.svg";

const dummy = {
  community: "또상 게시판",
  title: "대마고에서 살아남는 꿀팁 공유!!",
  author: "주문하신 하마",
  date: "2025.08.09",
  likes: 63,
  views: 63,
  content: `안녕 친구들~
빡빡이 아죠씨야~

아갓어 대쉬
브렉업더 웨이에이에
암인마 데블
혁명은시작되써일어나운명은우리에게
아가러 대쉬

이 몸이 죽어가서 무엇이 될꼬 하니
봉래산 제일봉에 낙락장송 되어 있어
백설이 만건곤할 제 독야청청 하리라

동짓달 기나긴 밤을
한 허리를`,
};

const WeeDetail = () => {
  return (
    <div>
      <Container>
        <BoardHeader
          community={dummy.community}
          title={dummy.title}
          author={dummy.author}
          date={dummy.date}
          views={dummy.views}
        />
        <ContentSection>
          <div>
            {dummy.content.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>

          <LikeWrap>
            <Like>
              {dummy.likes}
              <img src={blankHeart} alt="" />
            </Like>
          </LikeWrap>
        </ContentSection>
        <CommentSection>
          <Separate>댓글</Separate>
        </CommentSection>
      </Container>
    </div>
  );
};

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
