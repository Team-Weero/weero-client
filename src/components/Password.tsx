import { useId, useState } from "react";
import styled from "@emotion/styled";
import OpenEye from "../assets/open-eye.svg";
import CloseEye from "../assets/close-eye.svg";

type PasswordInputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | null;
};

const PasswordInput = ({ label, value, onChange, error }: PasswordInputProps) => {
  const [visible, setVisible] = useState(false);
  const inputId = useId();
  const errorId = `${inputId}-error`;

  const toggleVisible = () => setVisible((v) => !v);

  return (
    <Margin>
      <Password>{label}</Password>
      <InputWrapper aria-invalid={!!error}>
        <Input
          id={inputId}
          type={visible ? "text" : "password"}
          placeholder="비밀번호를 입력하세요"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
        <IconButton
          type="button"
          onClick={toggleVisible}
          aria-pressed={visible}
          aria-label={visible ? "비밀번호 숨기기" : "비밀번호 표시"}
          title={visible ? "비밀번호 숨기기" : "비밀번호 표시"}
        >
          <Icon src={visible ? OpenEye : CloseEye} alt="" />
        </IconButton>
      </InputWrapper>

      {error && (
        <ErrorText id={errorId} role="alert">
          {error}
        </ErrorText>
      )}
    </Margin>
  );
};

export default PasswordInput;

const Password = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 346px;
  border: 1px solid ${({ theme }) => theme.color.gray[1]};
  border-radius: 5px;
  padding: 0 12px;
  height: 40px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  height: 38px;
  padding-right: 40px;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[1]};
  }
`;

const IconButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  display: block;
  pointer-events: none;
`;

const Margin = styled.div`
  margin-left: 28px;
`;

const ErrorText = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.error};
`;
