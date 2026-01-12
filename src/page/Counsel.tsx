import styled from "@emotion/styled";
import { theme } from "../style/theme";
import NavBar from "../components/system/NavBar";
import Banner from "../components/system/Banner";
import ChatList from "../components/counsel/ChatList";

const Counsel = () => {
  return (
    <>
      <NavBar text="홈" />
      <Banner
        SmallText="DSM 학생들을 위한 따뜻한 상담 서비스"
        BigText="Wee 위로에서"
        EctText="만나보세요"
      />

      <MessageSection>
        <MessageTitle>메시지</MessageTitle>
      </MessageSection>

      <ChatList />
    </>
  );
};

export default Counsel;

const MessageSection = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;

  padding: 0 20px;

  border-bottom: 1px solid ${theme.color.gray[3]};
`;

const MessageTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: black;
`;
