import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "../../style/theme";
import arrow from "../../assets/arrow_up.svg";

interface Prop {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const BottomInput = ({ placeholder, value, onChange, onSubmit }: Prop) => {
  const hasValue = value.trim().length > 0;

  return (
    <CommentInput>
      <InputWrap>
        <input
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputWrap>
      {hasValue && (
        <SubmitButton onClick={onSubmit}>
          <img src={arrow} alt="댓글 달기" />
        </SubmitButton>
      )}
    </CommentInput>
  );
};

const popIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const SubmitButton = styled.button`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.main};
  cursor: pointer;
  animation: ${popIn} 0.2s ease-out;
`;
const InputWrap = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${theme.color.gray[4]};
  border: none;
  border-radius: 10px;
  input {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    padding-left: 16px;
    border-radius: 10px;
    :focus {
      outline: 1px solid black;
    }
  }
`;
const CommentInput = styled.div`
  width: 100%;
  padding: 12px 11px 28px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  position: fixed;
  bottom: 0;
  background-color: white;
`;

export default BottomInput;
