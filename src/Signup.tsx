import styled from "@emotion/styled";
import EmailInput from "./components/Email";
import PasswordInput from "./components/Password";
import NameInput from "./components/Name";
import NumInput from "./components/NumInput";
import SignButton from "./components/SignupButton";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const DOMAIN = "@dsm.hs.kr";

async function signupApi(params: { studentId: string; email: string; password: string }) {
  const { studentId, email, password } = params;

  if (!/^\d{4}$/.test(studentId)) throw { code: "BAD_STUDENT_ID" };
  if (email.startsWith("wee")) throw { code: "EMAIL_EXISTS" };
  if (password.length < 8) throw { code: "WEAK_PASSWORD" };

  return { ok: true };
}

const Signup = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [emailLocal, setEmailLocal] = useState("");
  const [password, setPassword] = useState("");

  const [studentIdError, setStudentIdError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isActive =
    studentId.trim().length > 0 &&
    name.trim().length > 0 &&
    emailLocal.trim().length > 0 &&
    password.trim().length > 0;

  const validate = () => {
    let ok = true;

    if (!/^\d{4}$/.test(studentId)) {
      setStudentIdError("4자리 숫자를 입력하세요");
      ok = false;
    } else setStudentIdError(null);

    if (!name.trim()) {
      setNameError("이름을 입력해 주세요");
      ok = false;
    } else setNameError(null);

    if (!emailLocal.trim()) {
      setEmailError("이메일을 입력해 주세요");
      ok = false;
    } else setEmailError(null);

    if (password.length < 8) {
      setPasswordError("비밀번호는 8자 이상이어야 합니다");
      ok = false;
    } else setPasswordError(null);

    return ok;
  };

  const handleSignup = async () => {
    if (loading) return;

    setStudentIdError(null);
    setNameError(null);
    setEmailError(null);
    setPasswordError(null);

    let hasEmpty = false;
    if (!studentId.trim()) {
      setStudentIdError("4자리 숫자를 입력하세요");
      hasEmpty = true;
    }
    if (!name.trim()) {
      setNameError("이름을 입력해 주세요");
      hasEmpty = true;
    }
    if (!emailLocal.trim()) {
      setEmailError("이메일을 입력해 주세요");
      hasEmpty = true;
    }
    if (!password.trim()) {
      setPasswordError("비밀번호를 입력해 주세요");
      hasEmpty = true;
    }
    if (hasEmpty) return;

    if (!validate()) return;

    const fullEmail = `${emailLocal}${DOMAIN}`;

    setLoading(true);
    try {
      await signupApi({
        studentId,
        email: fullEmail,
        password,
      });
      
    } catch (err: any) {
      switch (err?.code) {
        case "BAD_STUDENT_ID":
          setStudentIdError("4자리 숫자를 입력하세요");
          break;
        case "EMAIL_EXISTS":
          setEmailError("이미 존재하는 사용자입니다");
          break;
        case "WEAK_PASSWORD":
          setPasswordError("비밀번호는 8자 이상이어야 합니다");
          break;
        default:
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Text>
        <SignupText>
          <Title>Weero</Title>에 회원가입
        </SignupText>
        <Dsm>학교 이메일로 가입하세요</Dsm>
      </Text>

      <NumInput
        value={studentId}
        onChange={(v) => {
          const onlyDigits = v.replace(/\D/g, "").slice(0, 4);
          setStudentId(onlyDigits);
          if (studentIdError) setStudentIdError(null);
        }}
        error={studentIdError}
      />

      <NameInput
        value={name}
        onChange={(v) => {
          setName(v);
          if (nameError) setNameError(null);
        }}
        error={nameError}
      />

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
      <SignButton active={isActive} loading={loading} onClick={handleSignup} />

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