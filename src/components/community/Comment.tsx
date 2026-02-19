import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import blankHeart from "../../assets/heart.svg";
import filledHeart from "../../assets/heart-filled.svg";
import kebab from "../../assets/kebab.svg";

interface Prop {
  nickName: string;
  answer: string;
  likes?: number;
  hearted: boolean;
  handleLike: () => void;
  handleDelete: () => void;
}

const Comment = ({
  nickName,
  answer,
  likes,
  hearted,
  handleLike,
  handleDelete,
}: Prop) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <CommentContainer>
      <TopRow>
        <p>{nickName}</p>
        <KebabWrapper>
          <KebabButton onClick={() => setMenuOpen((prev) => !prev)}>
            <img src={kebab} alt="메뉴" />
          </KebabButton>
          {menuOpen && (
            <DropdownMenu>
              <DeleteButton
                onClick={() => {
                  setMenuOpen(false);
                  handleDelete();
                }}
              >
                삭제하기
              </DeleteButton>
            </DropdownMenu>
          )}
        </KebabWrapper>
      </TopRow>
      <div>{answer}</div>
      <Like onClick={handleLike}>
        <img src={hearted ? filledHeart : blankHeart} alt="" />
        {likes ? likes : 0}
      </Like>
    </CommentContainer>
  );
};

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const KebabWrapper = styled.div`
  position: relative;
`;

const KebabButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid ${theme.color.gray[3]};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${theme.color.error};
  cursor: pointer;
  white-space: nowrap;
`;

const Like = styled.span`
  display: flex;
  flex-direction: row;
  gap: 2px;
  font-size: 12px;
  color: ${theme.color.gray[1]};
  img {
    width: 14px;
    height: 14px;
  }
`;
const CommentContainer = styled.div`
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
