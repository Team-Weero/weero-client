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
  return { ok: true };
}

const Signup = () => {
  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [number, setNumber] = useState("");

  const [name, setName] = useState("");
  const [emailLocal, setEmailLocal] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [studentIdError, setStudentIdError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordConfirmError, setPasswordConfirmError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const studentId = `${grade}${classNum}${number.padStart(2, "0")}`;

  const isActive =
    grade &&
    classNum &&
    number &&
    name.trim().length > 0 &&
    emailLocal.trim().length > 0 &&
    password.trim().length > 0 &&
    passwordConfirm.trim().length > 0;

  const validate = () => {
    let ok = true;

    if (!grade || !classNum || !number) {
      setStudentIdError("학번을 입력해주세요");
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

    if (password !== passwordConfirm) {
      setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
      ok = false;
    } else setPasswordConfirmError(null);

    return ok;
  };

  const handleSignup = async () => {
    if (loading) return;

    setStudentIdError(null);
    setNameError(null);
    setEmailError(null);
    setPasswordError(null);
    setPasswordConfirmError(null);

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
        grade={grade}
        classNum={classNum}
        number={number}
        onChange={({ grade, classNum, number }) => {
          setGrade(grade);
          setClassNum(classNum);
          setNumber(number);
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

      <PasswordInput
        label="비밀번호 확인"
        value={passwordConfirm}
        onChange={(v) => {
          setPasswordConfirm(v);
          if (passwordConfirmError) setPasswordConfirmError(null);
        }}
        error={passwordConfirmError}
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
