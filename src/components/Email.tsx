import styled from "@emotion/styled";

type Props = {
  value: string;
  onChange: (v: string) => void;
  error?: string | null;
  domain?: string;
};

const EmailInput = ({ value, onChange, error, domain = "@dsm.hs.kr" }: Props) => {
  return (
    <Margin>
      <Email>이메일</Email>
      <InputWrapper>
        <Input
          type="text"
          placeholder="이메일을 입력하세요"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "email-error" : undefined}
        />
        <Fixed>{domain}</Fixed>
      </InputWrapper>
      {error && (
        <ErrorText id="email-error" role="alert">
          {error}
        </ErrorText>
      )}
    </Margin>
  );
};

const Email = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
  margin-top: 20px;
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
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  flex: 1; /* fill remaining space safely */
  height: 38px;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[1]};
  }
`;

const Margin = styled.div`
  margin-left: 28px;
`;

const Fixed = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.color.gray[1]};
  font-size: 16px;
`;

const ErrorText = styled.p`
  font-size: 16px;
  margin-top: 8px;
  color: ${({ theme }) => theme.color.error};
`;

export default EmailInput;
