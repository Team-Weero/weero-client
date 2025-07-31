import styled from "@emotion/styled";
import { theme } from "../style/theme";
import { useState } from "react";

interface ConsultationType {
  id: string;
  title: string;
  description: string;
}

const consultationTypes: ConsultationType[] = [
  {
    id: "chat",
    title: "채팅상담",
    description: "Wee에서 온라인으로 상담해요",
  },
  {
    id: "face",
    title: "대면상담",
    description: "학교 Wee 클래스에서 상담해요",
  },
];

interface ConsultationTypeSelectorProps {
  selectedType: string | null;
  onTypeSelect: (typeId: string | null) => void;
}

export const ConsultationTypeSelector = ({
  selectedType,
  onTypeSelect,
}: ConsultationTypeSelectorProps) => {
  const handleTypeSelect = (typeId: string) => {
    const newSelection = typeId === selectedType ? null : typeId;
    onTypeSelect(newSelection);
  };

  return (
    <Container>
      <ButtonGroup>
        {consultationTypes.map((type) => {
          const isSelected = selectedType === type.id;
          return (
            <TypeButton
              key={type.id}
              onClick={() => handleTypeSelect(type.id)}
              selected={isSelected}
            >
              <Title selected={isSelected}>{type.title}</Title>
              <Description selected={isSelected}>
                {type.description}
              </Description>
            </TypeButton>
          );
        })}
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 709px;
  left: 24px;
  width: calc(100% - 48px);
  max-width: 354px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const TypeButton = styled.button<{ selected: boolean }>`
  width: 168px;
  height: 44px;
  background: ${(props) => (props.selected ? "white" : theme.color.gray[4])};
  border: 1px solid
    ${(props) => (props.selected ? theme.color.main : theme.color.gray[3])};
  border-radius: 10px;
  text-align: left;
  cursor: pointer;
  position: relative;
  opacity: 1;

  &:hover {
    ${(props) =>
      !props.selected &&
      `
      border-color: ${theme.color.main};
    `}
  }

  &:focus {
    outline: none;
    border-color: ${theme.color.main};

`;

const Title = styled.div<{ selected: boolean }>`
  position: absolute;
  top: 6px;
  left: 6px;
  width: 56px;
  height: 19px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) =>
    props.selected ? theme.color.main : theme.color.gray[1]};
  opacity: 1;
`;

const Description = styled.div<{ selected: boolean }>`
  position: absolute;
  top: 25px;
  left: 6px;
  width: 155px;
  height: 14px;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) =>
    props.selected ? theme.color.gray[2] : theme.color.gray[2]};
  line-height: 1.3;
  opacity: 1;
`;
