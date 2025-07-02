import styled from "@emotion/styled";
import { theme } from "../../style/theme";

interface Prop {
  placeholder: string;
}

const BottomInput = ({ placeholder }: Prop) => {
  return (
    <CommentInput>
      <InputWrap>
        <input placeholder={placeholder} type="text" />
      </InputWrap>
    </CommentInput>
  );
};

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
  position: fixed;
  bottom: 0;
  background-color: white;
`;

export default BottomInput;
