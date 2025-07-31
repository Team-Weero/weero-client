import styled from "@emotion/styled";
import { theme } from "../../style/theme";

interface Prop {
  name: string;
}

const NameBar = ({ name }: Prop) => {
  return <Bar>{name}</Bar>;
};

const Bar = styled.div`
  width: 100vw;
  height: 52px;
  padding-left: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${theme.color.gray[3]};
  font-size: 15px;
  font-weight: 700;
  color: black;
`;

export default NameBar;
