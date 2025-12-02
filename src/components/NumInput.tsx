import styled from "@emotion/styled";

type Props = {
  value: string;
  onChange: (v: string) => void;
  error?: string | null;
};

const NumInput = ({ value, onChange, error }: Props) => {
  return (
    <Margin>
      <NumberLabel>학번</NumberLabel>
      <InputWrapper>
        <Input
          inputMode="numeric"
          placeholder="학번을 입력하세요"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "studentid-error" : undefined}
        />
      </InputWrapper>
      {error && (
        <ErrorText id="studentid-error" role="alert">
          {error}
        </ErrorText>
      )}
    </Margin>
  );
};

const NumberLabel = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
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
  width: 346px;
  height: 38px;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[1]};
  }
`;

const Margin = styled.div`
  margin-left: 28px;
`;

const ErrorText = styled.p`
  margin-top: 6px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.error};
`;

export default NumInput;
