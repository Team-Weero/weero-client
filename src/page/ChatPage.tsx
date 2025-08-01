import styled from "@emotion/styled";
import { theme } from "../style/theme";
import ChatHeader from "../components/ChatHeader";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import Human from "../assets/person.svg";
import Arrow from "../assets/arrow-white.svg";

const ChatPage = () => {
  const [message, setMessage] = useState("");

  const messages = [
    { id: 1, sender: "teacher", text: "무슨 일이니 친구야" },
    { id: 2, sender: "student", text: "집에 가고싶어요" },
    { id: 3, sender: "student", text: "집에 너무 가고싶어요" },
    { id: 4, sender: "teacher", text: "그렇구나" },
  ];

  return (
    <ChatContainer>
      <ChatHeader community="상담" />
      <MessageList>
        {messages.map((msg) => (
          <MessageItem key={msg.id} sender={msg.sender}>
            <ProfileWrapper sender={msg.sender}>
              <img
                src={msg.sender === "teacher" ? Logo : Human}
                alt={msg.sender}
              />
            </ProfileWrapper>
            <MessageBubble sender={msg.sender}>{msg.text}</MessageBubble>
          </MessageItem>
        ))}
      </MessageList>
      <InputArea>
        <MessageInput
          placeholder="메시지 입력"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {message.trim() !== "" && (
          <SendButton>
            <img src={Arrow} alt="send" />
          </SendButton>
        )}
      </InputArea>
    </ChatContainer>
  );
};

export default ChatPage;

const ChatContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MessageList = styled.div`
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MessageItem = styled.div<{ sender: string }>`
  display: flex;
  align-items: flex-end;
  ${({ sender }) =>
    sender === "teacher"
      ? `flex-direction: row;`
      : `flex-direction: row-reverse;`}
`;

const ProfileWrapper = styled.div<{ sender: string }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ sender }) =>
    sender === "teacher" ? "#ffffff" : theme.color.gray[1]};
  border: ${({ sender }) =>
    sender === "teacher" ? `1px solid ${theme.color.gray[3]}` : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

const MessageBubble = styled.div<{ sender: string }>`
  max-width: 80%;
  padding: 8px 12px;
  border-radius: 10px;
  border-top-left-radius: ${({ sender }) =>
    sender === "teacher" ? "0" : "10px"};
  border-top-right-radius: ${({ sender }) =>
    sender === "teacher" ? "10px" : "0"};
  background-color: ${({ sender }) =>
    sender === "teacher" ? theme.color.gray[4] : theme.color.main};
  color: ${({ sender }) => (sender === "teacher" ? "black" : "#ffffff")};
  font-size: 14px;
  line-height: 1.4;
  word-break: break-word;
`;

const InputArea = styled.div`
  padding: 8px 12px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  background-color: ${theme.color.gray[4]};
  width: 90%;
  height: 40px;
`;

const SendButton = styled.button`
  background-color: ${theme.color.main};
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;
