import styled from "styled-components";
import { theme } from "../../style/theme";

interface ChatProps {
  state: "진행중" | "대기중" | "완료";
}

const getStateColor = (theme: any, state: "진행중" | "대기중" | "완료") => {
  switch (state) {
    case "진행중":
      return theme.color.main;
    case "대기중":
      return theme.color.error;
    case "완료":
      return theme.color.gray[2];
    default:
      return theme.color.gray[2];
  }
};

const ChatStatus = ({ state }: ChatProps) => {
  const backgroundColor = getStateColor(theme, state);

  return (
    <StatusDiv $background={backgroundColor} $state={state}>
      <StatusText>{state}</StatusText>
    </StatusDiv>
  );
};

export default ChatStatus;

const StatusDiv = styled.div<{
  $background: string;
  $state: "진행중" | "대기중" | "완료";
}>`
  width: ${({ $state }) => ($state === "완료" ? "39px" : "50px")};
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ $background }) => $background};
  border-radius: 10px;
`;

const StatusText = styled.span`
  font-size: 13px;
  color: white;
  font-weight: 600;
`;
