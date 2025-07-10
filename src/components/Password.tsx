import styled from "@emotion/styled";

type PasswordInputProps = {
  label: string;
};

const PasswordInput = ({ label }: PasswordInputProps) => {
  return (
    <Margin>
      <Password>{label}</Password>
      <InputWrapper>
        <Input type="password" placeholder="비밀번호를 입력하세요" />
      </InputWrapper>
    </Margin>
  );
};

const Password = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 346px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.gray[1]};
  border-radius: 5px;
  padding: 0 12px;
  height: 40px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 346px;
  height: 38px;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[1]};
  }
`;

const Margin = styled.div`
  margin-left: 28px;
`;

export default PasswordInput;
