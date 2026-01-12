import styled from "styled-components";
import { theme } from "../../style/theme";
import ProfileComponent from "./Profile";
import ChatStatus from "./ChatStatus";

interface ChatItemProps {
  date: string;
  title: string;
  state: "진행중" | "대기중" | "완료";
}

const ChatItem = ({ date, title, state }: ChatItemProps) => {
  return (
    <ItemWrapper>
      <ProfileComponent />

      <TextWrapper>
        <TopRow>
          <DateText>{date}</DateText>
          <ChatStatus state={state} />
        </TopRow>
        <TitleText>{title}</TitleText>
      </TextWrapper>
    </ItemWrapper>
  );
};

export default ChatItem;

const ItemWrapper = styled.div`
  width: 100%;
  height: 72px;
  padding: 0 20px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${theme.color.gray[3]};
`;

const TextWrapper = styled.div`
  flex: 1;
  margin-left: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DateText = styled.span`
  font-size: 15px;
  color: black;
  font-weight: 600;
`;

const TitleText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.gray[1]};
`;
