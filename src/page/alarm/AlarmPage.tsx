import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import { theme } from "../../style/theme";
import AlarmContainer from "../../components/alarm/AlarmContainer";
import AlarmItem from "../../components/alarm/AlarmItem";

const AlarmPage = () => {
  return (
    <Container>
      <TopSection>
        <Link to="/wee-community">
          <img src={arrow} alt="뒤로 가기" />
        </Link>
        알림
      </TopSection>
      <AlarmSection>
        <AlarmContainer></AlarmContainer>
      </AlarmSection>
      <NoAlarm>이전 알림이 없습니다...</NoAlarm>
    </Container>
  );
};

const NoAlarm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  color: ${theme.color.gray[1]};
`;
const AlarmSection = styled.section`
  width: 100%;
  padding: 24px 20px;
`;
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
    left: 12px;
  }
  border-bottom: 1px solid ${theme.color.gray[3]};
  padding: 70px 0 24px 0;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default AlarmPage;
