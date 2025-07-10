import styled from "@emotion/styled";
import EmailInput from "./components/Email";
import PasswordInput from "./components/Password";
import NameInput from "./components/Name";
import NumInput from "./components/NumInput";
import SignButton from "./components/SignUpButton";
import { Link as RouterLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Text>
        <SignupText>
          <Title>Weero</Title>에 회원가입
        </SignupText>
        <Dsm>학교 이메일로 가입하세요</Dsm>
      </Text>
      <NumInput />
      <NameInput />
      <EmailInput />
      <PasswordInput label="비밀번호" />
      <SignButton />
      <Mvlogin>
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
      </Mvlogin>
    </>
  );
};

export default Signup;

const SignupText = styled.h1`
  margin-top: 189px;
  font-size: 32px;
  font-weight: 550;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.color.main};
`;

const Text = styled.div`
  margin-left: 28px;
`;

const Dsm = styled.p`
  color: ${({ theme }) => theme.color.gray[1]};
  margin-top: 12px;
  margin-bottom: 36px;
`;

const Mvlogin = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray[1]};
  margin-left: 94px;
`;

const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.color.main};
`;
