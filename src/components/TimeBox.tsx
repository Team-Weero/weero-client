import styled from "@emotion/styled";
import { theme } from "../style/theme";

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

const timeSlots: TimeSlot[] = [
  { id: "1", startTime: "12:00", endTime: "12:30", available: true },
  { id: "2", startTime: "12:00", endTime: "12:30", available: false },
  { id: "3", startTime: "12:00", endTime: "12:30", available: true },
  { id: "4", startTime: "12:00", endTime: "12:30", available: true },
  { id: "5", startTime: "12:00", endTime: "12:30", available: true },
  { id: "6", startTime: "12:00", endTime: "12:30", available: true },
  { id: "7", startTime: "12:00", endTime: "12:30", available: false },
  { id: "8", startTime: "12:00", endTime: "12:30", available: true },
];

interface TimeSlotBoxProps {
  selectedSlot: string | null;
  onSlotSelect: (slotId: string | null) => void;
}

export const TimeSlotBox = ({
  selectedSlot,
  onSlotSelect,
}: TimeSlotBoxProps) => {
  const handleSlotClick = (slotId: string, available: boolean) => {
    if (!available) return;
    const newSelection = slotId === selectedSlot ? null : slotId;
    onSlotSelect(newSelection);
  };

  return (
    <Container>
      <TimeGrid>
        {timeSlots.map((slot) => (
          <TimeSlotButton
            key={slot.id}
            onClick={() => handleSlotClick(slot.id, slot.available)}
            disabled={!slot.available}
            selected={selectedSlot === slot.id}
            available={slot.available}
          >
            <TimeMain
              selected={selectedSlot === slot.id}
              available={slot.available}
            >
              {slot.startTime}
            </TimeMain>
            <TimeDuration
              selected={selectedSlot === slot.id}
              available={slot.available}
            >
              ~ {slot.endTime}
            </TimeDuration>
          </TimeSlotButton>
        ))}
      </TimeGrid>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 468px;
  left: 24px;
  width: calc(100% - 48px);
  max-width: 354px;
`;

const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
`;

const TimeSlotButton = styled.button<{
  selected: boolean;
  available: boolean;
}>`
  background: ${(props) => {
    if (!props.available) return theme.color.gray[3];
    return "white";
  }};
  border: 1px solid
    ${(props) => {
      if (props.selected) return theme.color.main;
      return theme.color.gray[1];
    }};
  border-radius: 10px;
  padding: 12px 18px;
  text-align: center;
  cursor: ${(props) => (props.available ? "pointer" : "not-allowed")};

  width: 80px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  opacity: 1;

  &:hover {
    ${(props) =>
      props.available &&
      !props.selected &&
      `
      border-color: ${theme.color.main};
    `}
  }

  &:focus {
    outline: none;
    ${(props) =>
      props.available &&
      `
      border-color: ${theme.color.main};
    `}
  }
`;

const TimeMain = styled.div<{ selected?: boolean; available?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => {
    if (!props.available) return theme.color.gray[1];
    return "#000000";
  }};
`;

const TimeDuration = styled.div<{ selected?: boolean; available?: boolean }>`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => {
    if (!props.available) return theme.color.gray[1];
    return theme.color.gray[1];
  }};
`;
