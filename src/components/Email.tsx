import styled from "@emotion/styled";

type Props = {
  value: string;
  onChange: (v: string) => void;
  error?: string | null;
  domain?: string;
};

const EmailInput = ({ value, onChange, error, domain = "@dsm.hs.kr" }: Props) => {
  return (
    <Field>
      <Label>이메일</Label>

      <InputArea>
        <InputWrapper>
          <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="이메일을 입력하세요" />
          <Fixed>{domain}</Fixed>
        </InputWrapper>

        {error && <ErrorText>{error}</ErrorText>}
      </InputArea>
    </Field>
  );
};

export default EmailInput;

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
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.gray[1]};
  border-radius: 5px;
  padding: 0 12px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
`;

const Fixed = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.color.gray[1]};
`;

const ErrorText = styled.p`
  position: absolute;
  right: 0;
  bottom: -18px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.error};
  margin: 0;
`;
