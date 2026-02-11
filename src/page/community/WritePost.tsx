import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../api/posts";

const WritePost = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCancel = () => {
    navigate(-1);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    try {
      await createPost({ title, content });
      navigate(-1);
    } catch (e) {
      alert("게시글 작성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, []);

  const isActive = !!title.trim() && !!content.trim();

  return (
    <Container>
      <ButtonSection>
        <p onClick={handleCancel}>취소</p>
        <PostButton $active={isActive} onClick={handleSubmit}>
          게시하기
        </PostButton>
      </ButtonSection>
      <ContentSection>
        <TitleInput>
          <input
            placeholder="제목"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </TitleInput>
        <StyledTextarea
          ref={textareaRef}
          placeholder="내용을 입력하세요..."
          value={content}
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
const PostButton = styled.button<{ $active: boolean }>`
  padding: 12px 14px;
  background-color: ${({ $active }) =>
    $active ? theme.color.main : theme.color.gray[4]};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $active }) => ($active ? "#fff" : theme.color.gray[1])};
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
