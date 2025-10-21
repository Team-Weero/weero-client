import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";
import { theme } from "../style/theme";
import { Link } from "react-router-dom";

interface Prop {
  community: string;
}

const ChatHeader = ({ community }: Prop) => {
  return (
    <Container>
      <TopSection>
        <Link to="/chat-home">
          <img src={arrow} alt="뒤로 가기" />
        </Link>
        {community}
      </TopSection>
    </Container>
  );
};

const TopSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 20px;
  font-weight: 700;
  color: black;
  img {
    position: absolute;
    left: 0;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 70px 0 10px 12px;
  gap: 36px;
  border-bottom: 1px solid ${theme.color.gray[3]};
`;

export default ChatHeader;
