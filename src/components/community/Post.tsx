import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import view from "../../assets/open-eye.svg";
import like from "../../assets/heart.svg";
import comment from "../../assets/chat.svg";
import dot from "../../assets/dot-gray.svg";

interface Prop {
  title: string;
  views: number;
  likes: number;
  comments: number;
  author: string;
  timeAgo: string;
}

const Post = ({ title, views, likes, comments, author, timeAgo }: Prop) => {
  return (
    <Container>
      <Title>{title}</Title>
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
          <img src={comment} alt="view" />
          {comments}
        </Item>
      </ItemWrap>
      <Author>
        {author}
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
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  border-bottom: 1px solid ${theme.color.gray[3]};
  cursor: pointer;
`;

export default Post;
