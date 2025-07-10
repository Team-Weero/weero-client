import CancelButton from "./components/Cancel";
import ChangeButton from "./components/Change";
import PasswordInput from "./components/Password";
import styled from "@emotion/styled";

const ChangePwd = () => {
  return (
    <>
      <Pwd>
        <PasswordInput label="기존 비밀번호" />
        <PasswordInput label="새로운 비밀번호" />
        <PasswordInput label="새로운 비밀번호 확인" />
      </Pwd>
      <CancelButton />
      <ChangeButton />
    </>
  );
};

const Pwd = styled.div`
  margin: 164px 28px 0px 0px;
`;

export default ChangePwd;
