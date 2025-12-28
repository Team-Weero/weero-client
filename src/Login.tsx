import styled from "@emotion/styled";
import EmailInput from "./components/Email";
import PasswordInput from "./components/Password";
import LoginButton from "./components/LoginButton";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Toast from "./components/Toast";

const DOMAIN = "@dsm.hs.kr";

// TODO: Replace with actual API call before production
async function loginApi(email: string, password: string) {
  if (!email.endsWith(DOMAIN)) throw { code: "EMAIL_NOT_FOUND" };
  if (password !== "1234") throw { code: "WRONG_PASSWORD" };
  return { email };
}

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

  const handleLogin = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (loading) return;

    setEmailError(null);
    setPasswordError(null);
    setFormError(null);

    let hasError = false;
    if (!emailLocal.trim()) {
      setEmailError("이메일을 입력해 주세요");
      hasError = true;
    }
    if (!password.trim()) {
      setPasswordError("비밀번호를 입력해 주세요");
      hasError = true;
    }
    if (hasError) return;

    const fullEmail = `${emailLocal}${DOMAIN}`;

    setLoading(true);
    try {
      await loginApi(fullEmail, password);
    } catch (err: any) {
      switch (err?.code) {
        case "EMAIL_NOT_FOUND":
          setEmailError("존재하지 않는 이메일입니다");
          break;
        case "WRONG_PASSWORD":
          setPasswordError("비밀번호가 틀렸습니다");
          break;
        default:
          setFormError("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요");
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
        <LoginButton active={isActive} loading={loading} onClick={handleLogin} />

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
