import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  white-space: nowrap;
  font-size: 20px;

  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#010606" : "#01BF71")};
  }
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;
`;
