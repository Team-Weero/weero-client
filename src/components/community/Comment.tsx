import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import blankHeart from "../../assets/heart.svg";

interface Prop {
  userName: string;
  comment: string;
  likes: number;
}

const Comment = ({ userName, comment, likes }: Prop) => {
  return (
    <CommnetContainer>
      <p>{userName}</p>
      <div>{comment}</div>
      <Like>
        <img src={blankHeart} alt="" />
        {likes}
      </Like>
    </CommnetContainer>
  );
};

const Like = styled.span`
  display: flex;
  flex-direction: row;
  gap: 2px;
  font-size: 12px;
  color: ${theme.color.gray[1]};
`;
const CommnetContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 8px;
  gap: 12px;
  font-weight: 500;
  color: black;
  border-bottom: 1px solid ${theme.color.gray[3]};
  p {
    font-size: 14px;
  }
  div {
    font-size: 15px;
  }
`;

export default Comment;
