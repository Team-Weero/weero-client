import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const WritePost = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, []);

  return (
    <Container>
      <ButtonSection>
        <p onClick={handleCancel}>취소</p>
        <PostButton>게시하기</PostButton>
      </ButtonSection>
      <ContentSection>
        <TitleInput>
          <input placeholder="제목" type="text" />
        </TitleInput>
        <StyledTextarea
          ref={textareaRef}
          placeholder="내용을 입력하세요..."
          onChange={handleTextareaChange}
        />
      </ContentSection>
    </Container>
  );
};

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 16px 4px;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  resize: none;
  overflow: hidden;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${theme.color.gray[2]};
  }
`;
const TitleInput = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.color.gray[3]};
  input {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    font-size: 20px;
    font-weight: 400;
    padding-left: 4px;
    :focus {
      outline: none;
    }
  }
`;
const ContentSection = styled.section`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const PostButton = styled.button`
  padding: 12px 14px;
  background-color: ${theme.color.gray[4]};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.gray[1]};
  cursor: pointer;
`;
const ButtonSection = styled.section`
  width: 100%;
  height: 150px;
  padding: 73px 20px 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: black;
  p {
    cursor: pointer;
  }
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default WritePost;
