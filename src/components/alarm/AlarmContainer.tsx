import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import AlarmItem from "./AlarmItem";

const AlarmContainer = () => {
  return (
    <Container>
      <Time>오늘</Time>
      <ItemWrap>
        <AlarmItem />
        <AlarmItem />
      </ItemWrap>
    </Container>
  );
};

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Time = styled.div`
  padding-bottom: 24px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid ${theme.color.gray[3]};
  padding-bottom: 12px;
`;

export default AlarmContainer;
