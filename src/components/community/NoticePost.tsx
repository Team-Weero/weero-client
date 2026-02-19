import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import view from "../../assets/open-eye.svg";
import like from "../../assets/heart.svg";
import comment from "../../assets/chat.svg";
import dot from "../../assets/dot-gray.svg";
import speaker from "../../assets/speaker_icon.svg";

interface Prop {
  title: string;
  views: number;
  likes: number;
  comments: number;
  nickName: string;
  timeAgo: string;
}

const NoticePost = ({
  title,
  views,
  likes,
  comments,
  nickName,
  timeAgo,
}: Prop) => {
  return (
    <Container>
      <Title>
        <img src={speaker} alt="공지글" />
        {title}
      </Title>
      <ItemWrap>
        <Item>
          <img src={view} alt="view" />
          {views}
        </Item>
        <Item>
          <img src={like} alt="like" />
          {likes}
        </Item>
        <Item>
          <img src={comment} alt="comment" />
          {comments}
        </Item>
      </ItemWrap>
      <Author>
        {nickName}
        <img src={dot} alt="" />
        {timeAgo}
      </Author>
    </Container>
  );
};

const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${theme.color.gray[1]};
  font-size: 12px;
  font-weight: 500;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  img {
    width: 12px;
    height: 12px;
  }
`;
const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  font-weight: 500;
  color: ${theme.color.gray[1]};
`;
const Title = styled.h1`
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 4px;

  img {
    width: 16px;
    height: 16px;
  }
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  border-bottom: 1px solid ${theme.color.gray[3]};
  background-color: ${theme.color.gray[4]};
  cursor: pointer;
`;

export default NoticePost;
