import styled from "@emotion/styled";
import { theme } from "../style/theme";
import NavBar from "../components/system/NavBar";
import Banner from "../components/system/Banner";
import { useState } from "react";
import LeftArrow from "../assets/arrow-left.svg";
import RightArrow from "../assets/arrow-right.svg";
import { TimeSlotBox } from "../components/TimeBox";
import { ConsultationTypeSelector } from "../components/Button";

const CounselApply = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedConsultationType, setSelectedConsultationType] = useState<
    string | null
  >(null);

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

  const isAllSelected = selectedTimeSlot && selectedConsultationType;

  const handleSubmit = () => {};

  return (
    <>
      <NavBar text="상담 신청" />
      <Sentence>
        <CounselDay>상담날짜</CounselDay>를 선택하세요
      </Sentence>
      <SmallSentence>상담을 원하는 날짜를 알려주세요</SmallSentence>
      <WeeklyCalendarContainer>
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
      <ApplyDay>3월 4일</ApplyDay>
      <ApplySentence>상담 선생님은 이 시간에 상담이 가능해요</ApplySentence>
      <TimeSlotBox
        selectedSlot={selectedTimeSlot}
        onSlotSelect={setSelectedTimeSlot}
      />
      <PlacecSentence>
        <ApplyPlace>상담장소</ApplyPlace>를 선택하세요
      </PlacecSentence>
      <SmallSentences>
        대면 또는 채팅으로 상담을 진행할 수 있어요
      </SmallSentences>
      <ConsultationTypeSelector
        selectedType={selectedConsultationType}
        onTypeSelect={setSelectedConsultationType}
      />
      <SubmitButton
        onClick={handleSubmit}
        disabled={!isAllSelected}
        active={!!isAllSelected}
      >
        신청하기
      </SubmitButton>
    </>
  );
};

export default CounselApply;

const Sentence = styled.p`
  position: absolute;
  top: 224px;
  left: 24px;
  width: 194px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  opacity: 1;
`;

const SmallSentence = styled.span`
  position: absolute;
  top: 256px;
  left: 24px;
  width: 192px;
  height: 17px;
  font-size: 14px;
  font-weight: 500;
  opacity: 1;
`;

const WeeklyCalendarContainer = styled.div`
  width: 354px;
  height: 58px;
  position: absolute;
  top: 301px;
  left: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
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

const CounselDay = styled.span`
  color: ${theme.color.main};
`;

const ApplyDay = styled.p`
  position: absolute;
  top: 383px;
  left: 24px;
  width: 69px;
  height: 24px;
  color: ${theme.color.main};
  font-size: 20px;
  font-weight: 600;
  opacity: 1;
`;

const ApplySentence = styled.p`
  position: absolute;
  top: 415px;
  left: 24px;
  width: 238px;
  height: 17px;
  font-size: 14px;
  font-weight: 500;
  opacity: 1;
`;

const PlacecSentence = styled.p`
  position: absolute;
  top: 624px;
  left: 24px;
  width: 194px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  opacity: 1;
`;

const ApplyPlace = styled.span`
  color: ${theme.color.main};
`;

const SmallSentences = styled.p`
  position: absolute;
  top: 656px;
  left: 24px;
  width: 255px;
  height: 17px;
  font-size: 14px;
  font-weight: 500;
  opacity: 1;
`;

const SubmitButton = styled.button<{ active: boolean }>`
  position: absolute;
  top: 789px;
  left: 24px;
  width: 354px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: ${(props) =>
    props.active ? theme.color.main : theme.color.gray[1]};
  color: ${(props) => (props.active ? "white" : theme.color.gray[2])};
  font-size: 20px;
  font-weight: 600;
  cursor: ${(props) => (props.active ? "pointer" : "not-allowed")};
  opacity: 1;

  &:hover {
    ${(props) =>
      props.active &&
      `
      background: ${theme.color.main};
    `}
  }

  &:active {
    transform: ${(props) => (props.active ? "translateY(0)" : "none")};
  }
`;
