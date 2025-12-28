import styled from "@emotion/styled";
import { theme } from "../style/theme";
import NavBar from "../components/system/NavBar";
import Banner from "../components/system/Banner";
import { useState } from "react";
import LeftArrow from "../assets/arrow-left.svg";
import RightArrow from "../assets/arrow-right.svg";

const ChatHome = () => {
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
      <NavBar text="상담" />
      <Banner
        SmallText="선생님께 상담하고 싶은 일이 있나요?"
        BigText="1 : 1 채팅 상담 서비스"
      />
      <WeeklyCalendarContainer>
        <CalendarTitle>오늘의 상담 일정이 없어요</CalendarTitle>
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
      <ScheduleButton>
        <BigSentence>상담실은 언제나 열려있습니다</BigSentence>
        <SmallSentence>대면 상담 신청하러 가기</SmallSentence>
      </ScheduleButton>
    </>
  );
};

export default ChatHome;

const WeeklyCalendarContainer = styled.div`
  width: 354px;
  height: 110px;
  position: absolute;
  top: 504px;
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
  margin: 0 0 28px 0;
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

const ScheduleButton = styled.button`
  width: 354px;
  height: 68px;
  position: absolute;
  top: 686px;
  left: 24px;
  border-radius: 20px;
  border: 1px solid ${theme.color.main};
  background-color: white;
  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BigSentence = styled.p`
  width: 175px;
  height: 17px;
  position: absolute;
  top: 11px;
  left: 89px;
  opacity: 1;

  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin: 0;
  line-height: 17px;
  display: flex;
  align-items: center;
`;

const SmallSentence = styled.p`
  width: 199px;
  height: 24px;
  position: absolute;
  top: 32px;
  left: 77px;
  opacity: 1;

  font-size: 20px;
  font-weight: 600;
  margin: 0;
  line-height: 24px;
  display: flex;
  align-items: center;
`;
