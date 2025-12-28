import styled from "@emotion/styled";

type Props = {
  value: string;
  onChange: (v: string) => void;
  error?: string | null;
};

const NameInput = ({ value, onChange, error }: Props) => {
  return (
    <Margin>
      <Label>이름</Label>
      <InputWrapper>
        <Input
          type="text"
          placeholder="이름을 입력하세요"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "name-error" : undefined}
        />
      </InputWrapper>

      {error && <ErrorText id="name-error">{error}</ErrorText>}
    </Margin>
  );
};

export default NameInput;

const Label = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 346px;
  border: 1px solid ${({ theme }) => theme.color.gray[1]};
  border-radius: 5px;
  padding: 0 12px;
  height: 40px;
  margin-bottom: 6px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  height: 38px;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[1]};
  }
`;

const Margin = styled.div`
  margin-left: 28px;
  margin-bottom: 10px;
`;

const ErrorText = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: 16px;
  margin-top: 8px;
  margin-left: 2px;
  display: block;
`;
