import styled from "@emotion/styled";
import EmailInput from "../components/Email";
import PasswordInput from "../components/Password";
import LoginButton from "../components/LoginButton";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Toast from "../components/Toast";
import { signin } from "../api/auth";
import { useNavigate } from "react-router-dom";; 

const DOMAIN = "@dsm.hs.kr";

const Login = () => {
  const [emailLocal, setEmailLocal] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const toastMessage = location.state?.toastMessage;

  const isActive = emailLocal.trim().length > 0 && password.trim().length > 0;

  const navigate = useNavigate();

const handleLogin = async (e?: React.FormEvent<HTMLFormElement>) => {
  e?.preventDefault();
  if (loading) return;

  setEmailError(null);
  setPasswordError(null);
  setFormError(null);

  if (!emailLocal.trim()) {
    setEmailError("이메일을 입력해 주세요");
    return;
  }
  if (!password.trim()) {
    setPasswordError("비밀번호를 입력해 주세요");
    return;
  }

  const fullEmail = `${emailLocal}${DOMAIN}`;

  setLoading(true);
  try {
    const data = await signin({
      email: fullEmail,
      password,
    });

    localStorage.setItem("access_token", data.accessToken);
    localStorage.setItem("refresh_token", data.refreshToken);

    navigate("/");
  } catch (err: any) {
    if (err.response?.status === 401) {
      setFormError("이메일 또는 비밀번호가 올바르지 않습니다");
    } else if (err.response?.status === 400) {
      setFormError("잘못된 요청입니다");
    } else {
      setFormError("로그인 중 오류가 발생했습니다");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {toastMessage && <Toast message={toastMessage} />}
      <form onSubmit={handleLogin}>
        <Text>
          <LoginText>
            <Title>Weero</Title>에 로그인
          </LoginText>
          <Dsm>학교 이메일로 로그인 하세요</Dsm>
        </Text>

        <EmailInput
          value={emailLocal}
          onChange={(v) => {
            setEmailLocal(v);
            if (emailError) setEmailError(null);
          }}
          error={emailError}
          domain={DOMAIN}
        />

        <PasswordInput
          label="비밀번호"
          value={password}
          onChange={(v) => {
            setPassword(v);
            if (passwordError) setPasswordError(null);
          }}
          error={passwordError}
        />

        {formError && <FormError role="alert">{formError}</FormError>}

        {/* disabled prop 넘기지 마세요! */}
        <LoginButton
          active={isActive}
          loading={loading}
          onClick={handleLogin}
        />

        <Mvsignup>
          아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </Mvsignup>
      </form>
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
const FormError = styled.p`
  margin: 6px 0 0 28px;
  font-size: 12px;
  color: #ef4444;
`;
