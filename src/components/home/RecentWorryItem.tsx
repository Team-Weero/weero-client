import styled from "@emotion/styled";
import Logo from "../../assets/logo.svg";

interface Props {
  text: string;
}

const RecentWorryItem = ({ text }: Props) => {
  const displayText = text.length > 40 ? text.slice(0, 40) + "..." : text;

  return (
    <ItemWrapper>
      <Icon src={Logo} alt="worry" />
      <ItemText>{displayText}</ItemText>
    </ItemWrapper>
  );
};

export default RecentWorryItem;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`;

const ItemText = styled.p`
  font-size: 14px;
  margin: 0;
  font-weight: 600;
`;
