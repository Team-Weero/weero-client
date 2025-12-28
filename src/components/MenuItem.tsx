import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import VectorIcon from "../assets/Vector.svg";

type MenuItemProps = {
  label: string;
  to?: string; // 아이콘 클릭 시 이동할 경로
  onClickIcon?: () => void; // 로그아웃 같은 동작용
};

export const MenuItem = ({ label, to, onClickIcon }: MenuItemProps) => {
  return (
    <MenuRow>
      <MenuText>{label}</MenuText>

      {to ? (
        <IconLink to={to} aria-label={`${label} 페이지로 이동`}>
          <RightIcon src={VectorIcon} alt="" />
        </IconLink>
      ) : (
        <IconButton type="button" onClick={onClickIcon} aria-label={label}>
          <RightIcon src={VectorIcon} alt="" />
        </IconButton>
      )}
    </MenuRow>
  );
};

const MenuRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 40px);
  margin-top: 24px;

  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

const MenuText = styled.span`
  flex: 1;
`;

const RightIcon = styled.img`
  width: 12px;
  height: 24px;
  display: block;
`;

const IconLink = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  margin-left: 24px; /* 텍스트와 24px 간격 */
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin-left: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
