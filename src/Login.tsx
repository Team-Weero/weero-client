import styled from "@emotion/styled";
import EmailInput from "./components/Email";
import PasswordInput from "./components/Password";
import LoginButton from "./components/LoginButton";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Text>
        <LoginText>
          <Title>Weero</Title>에 로그인
        </LoginText>
        <Dsm>학교 이메일로 로그인 하세요</Dsm>
      </Text>
      <EmailInput />
      <PasswordInput label="비밀번호" />
      <LoginButton />
      <Mvsignup>
        아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </Mvsignup>
    </>
  );
};

export default Login;

const LoginText = styled.h1`
  margin-top: 189px;
  font-size: 32px;
  font-weight: 550;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.color.main};
`;

const Dsm = styled.p`
  color: ${({ theme }) => theme.color.gray[1]};
  margin-top: 12px;
  margin-bottom: 36px;
`;

const Text = styled.div`
  margin-left: 28px;
`;

const Mvsignup = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray[1]};
  margin-left: 94px;
`;

const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.color.main};
`;
