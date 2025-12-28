import styled from "@emotion/styled";

type Props = {
  active: boolean; 
  loading?: boolean;
  onClick?: () => void;
};

const SignupButton = ({ onClick, active, loading }: Props) => {
  const trulyDisabled = !!loading;

  return (
    <Sign
      type="button"
      onClick={onClick}
      disabled={trulyDisabled}
      $active={active && !trulyDisabled}
      aria-disabled={!active || trulyDisabled}
      aria-busy={!!loading}
    >
      {loading ? "가입 중..." : "회원가입"}
    </Sign>
  );
};

export default SignupButton;

const Sign = styled.button<{ $active: boolean }>`
  width: 346px;
  height: 48px;
  padding: 0 12px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  border: none;
  margin: 48px 0 16px 28px;
  transition: background-color 0.2s ease, opacity 0.2s ease;

  background-color: ${({ theme, $active }) => ($active ? theme.color.main : theme.color.gray[1])};
  cursor: ${({ $active }) => ($active ? "pointer" : "default")};

  &:hover {
    ${({ $active, theme }) =>
      $active &&
      `
        background-color: ${theme.color.mainHover || theme.color.main};
      `}
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
