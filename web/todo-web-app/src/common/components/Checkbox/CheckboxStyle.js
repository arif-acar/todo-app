import styled from "styled-components";
import { ReactComponent as CloseLogo } from "../../images/close.svg";

export const CloseButton = styled(CloseLogo)`
  display: none;
  height: auto;
  margin-left: auto;
  margin-right: 0;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 14px;
  text-align: left;
  overflow-wrap: anywhere;
  input {
    width: 18px;
    height: 18px;
  }

  &:hover ${CloseButton} {
    display: block;
  }
`;

export const CheckboxLabel = styled.label`
  font-family: MarkPro;
  font-size: 16px;
  line-height: 25px;
  color: #1f2a4b;
`;
