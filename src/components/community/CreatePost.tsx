import styled from "@emotion/styled";
import createPost from "../../assets/create-post.svg";
import { theme } from "../../style/theme";

const CreatePost = () => {
  return (
    <Container>
      <img src={createPost} alt="" />
      <p>글쓰기</p>
    </Container>
  );
};

const Container = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${theme.color.main};
  border: none;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: white;
  position: fixed;
  right: 32px;
  bottom: 32px;
  cursor: pointer;
`;

export default CreatePost;
