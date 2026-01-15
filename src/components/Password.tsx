import { useState } from "react";
import styled from "@emotion/styled";
import OpenEye from "../assets/open-eye.svg";
import CloseEye from "../assets/close-eye.svg";

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | null;
};

const PasswordInput = ({ label, value, onChange, error }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <Field>
      <Label>{label}</Label>

      <InputArea>
        <InputWrapper>
          <Input
            type={visible ? "text" : "password"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
          <IconButton onClick={() => setVisible(v => !v)}>
            <Icon src={visible ? OpenEye : CloseEye} />
          </IconButton>
        </InputWrapper>

        {error && <ErrorText>{error}</ErrorText>}
      </InputArea>
    </Field>
  );
};

export default PasswordInput;

const Field = styled.div`
  margin-left: 28px;
  width: 346px;
  margin-bottom: 20px;
`;

const Label = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
`;

const InputArea = styled.div`
  position: relative;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.gray[1]};
  border-radius: 5px;
  padding: 0 12px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
`;

const IconButton = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
`;

const ErrorText = styled.p`
  position: absolute;
  right: 0;
  bottom: -18px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.error};
  margin: 0;
`;
