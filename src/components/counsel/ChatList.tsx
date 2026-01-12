import styled from "styled-components";
import ChatItem from "./ChatItem";

const ChatList = () => {
  return (
    <ListWrapper>
      <ChatItem date="2025년 12월 26일" title="상담" state="진행중" />
      <ChatItem date="2025년 12월 26일" title="상담" state="대기중" />
      <ChatItem date="2025년 12월 26일" title="상담" state="완료" />
      <ChatItem date="2025년 12월 26일" title="상담" state="완료" />
      <ChatItem date="2025년 12월 26일" title="상담" state="완료" />
    </ListWrapper>
  );
};

export default ChatList;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
