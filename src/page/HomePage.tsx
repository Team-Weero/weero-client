import styled from "@emotion/styled";
import { theme } from "../style/theme";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import { useState } from "react";
import LeftArrow from "../assets/arrow-left.svg";
import RightArrow from "../assets/arrow-right.svg";

const HomePage = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const getWeekDays = (date: Date) => {
    const week = [];
    const startDate = new Date(date);
    const day = startDate.getDay();
    const diff = startDate.getDate() - day + 1;

    startDate.setDate(diff);

    for (let i = 0; i < 5; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const weekDays = getWeekDays(currentWeek);
  const dayNames = ["월", "화", "수", "목", "금"];

  const goToPreviousWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(currentWeek.getDate() - 7);
    setCurrentWeek(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(currentWeek.getDate() + 7);
    setCurrentWeek(newDate);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <>
      <NavBar text="홈" />
      <Banner
        SmallText="DSM 학생들을 위한 따뜻한 상담 서비스"
        BigText="Wee 위로에서"
        EctText="만나보세요"
      />
      <MiddleDiv>
        <OneText>상담실은 언제나 열려있습니다</OneText>
        <TwoText>상담 신청하러 가기</TwoText>
      </MiddleDiv>

      <WeeklyCalendarContainer>
        <CalendarTitle>오늘의 상담 일정이 없어요</CalendarTitle>
        {/* 나중에 기능
        구현할 때 시간, 상담유형 나오게 수정 */}
        <WeeklyCalendar>
          <img src={LeftArrow} onClick={goToPreviousWeek} />
          <WeekContainer>
            {dayNames.map((dayName, index) => (
              <DayColumn key={index}>
                <DayName>{dayName}</DayName>
                <DayNumber isToday={isToday(weekDays[index])}>
                  {weekDays[index].getDate()}
                </DayNumber>
              </DayColumn>
            ))}
          </WeekContainer>
          <img src={RightArrow} onClick={goToNextWeek} />
        </WeeklyCalendar>
      </WeeklyCalendarContainer>
    </>
  );
};

export default HomePage;

const MiddleDiv = styled.div`
  border: 1px solid ${theme.color.main};
  height: 68px;
  border-radius: 20px;
  width: min(354px, 90%);
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OneText = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  text-align: center;
`;

const TwoText = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;
`;

const WeeklyCalendarContainer = styled.div`
  width: 354px;
  height: 110px;
  position: absolute;
  top: 616px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CalendarTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  margin: 0 0 16px 0;
  text-align: left;
`;

const WeeklyCalendar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const WeekContainer = styled.div`
  display: flex;
  gap: 33px;
`;

const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const DayName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.color.gray[1]};
`;

const DayNumber = styled.div<{ isToday: boolean }>`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => (props.isToday ? theme.color.main : "#737373")};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
