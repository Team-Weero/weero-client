import styled from "@emotion/styled";

const EmailInput = () => {
  return (
    <>
      <Margin>
        <Email>이메일</Email>
        <InputWrapper>
          <Input type="email" placeholder="이메일을 입력하세요"></Input>
          <Fixed>@dsm.hs.kr</Fixed>
        </InputWrapper>
      </Margin>
    </>
  );
};

const Email = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 346px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.gray[1]};
  border-radius: 5px;
  padding: 0 12px;
  height: 40px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 346px;
  height: 38px;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[1]};
  }
`;

const Margin = styled.div`
  margin-left: 28px;
`;

const Fixed = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.color.gray[1]};
  font-size: 16px;
`;

export default EmailInput;
