import styled from "@emotion/styled";

type Props = {
  grade: string;
  classNum: string;
  number: string;
  onChange: (v: { grade: string; classNum: string; number: string }) => void;
  error?: string | null;
};

const grades = ["1", "2", "3"];
const classes = ["1", "2", "3", "4"];
const numbers = Array.from({ length: 20 }, (_, i) => String(i + 1));

const NumInput = ({ grade, classNum, number, onChange, error }: Props) => {
  return (
    <Field>
      <Label>학번</Label>

      <InputArea>
        <Row>
          <Select value={grade} onChange={(e) => onChange({ grade: e.target.value, classNum, number })}>
            <option value="">학년</option>
            {grades.map((g) => <option key={g} value={g}>{g}</option>)}
          </Select>

          <Select value={classNum} onChange={(e) => onChange({ grade, classNum: e.target.value, number })}>
            <option value="">반</option>
            {classes.map((c) => <option key={c} value={c}>{c}</option>)}
          </Select>

          <Select value={number} onChange={(e) => onChange({ grade, classNum, number: e.target.value })}>
            <option value="">번호</option>
            {numbers.map((n) => <option key={n} value={n}>{n}</option>)}
          </Select>
        </Row>

        {error && <ErrorText>{error}</ErrorText>}
      </InputArea>
    </Field>
  );
};

export default NumInput;

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

const Row = styled.div`
  display: flex;
  gap: 8px;
`;

const Select = styled.select`
  width: 110px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.gray[1]};
  border-radius: 5px;
  padding: 0 12px;
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