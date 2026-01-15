import styled from "@emotion/styled";

type Props = {
  value: string;
  onChange: (v: string) => void;
  error?: string | null;
};

const NameInput = ({ value, onChange, error }: Props) => {
  return (
    <Field>
      <Label>이름</Label>

      <InputArea>
        <InputWrapper>
          <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="이름을 입력하세요" />
        </InputWrapper>

        {error && <ErrorText>{error}</ErrorText>}
      </InputArea>
    </Field>
  );
};

export default NameInput;

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
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.gray[1]};
  border-radius: 5px;
  padding: 0 12px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 38px;
  border: none;
  outline: none;
  font-size: 16px;
`;

const ErrorText = styled.p`
  position: absolute;
  right: 0;
  bottom: -18px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.error};
  margin: 0;
`;
