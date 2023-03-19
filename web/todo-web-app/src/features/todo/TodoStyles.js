import styled from "styled-components";
import { ReactComponent as CheckMarkLogo } from "../../common/images/checkmark.svg";

const ToDoWrapper = styled.div`
  width: 380px;
  padding: 35px 30px;
  border-radius: 5px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const ToDoHeaderSection = styled.div`
  margin-bottom: 35px;
  text-align: left;
`;

const ToDoHeader = styled.div`
  width: 100px;
  height: 28px;
  font-family: MarkPro;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark-blue-grey);
  margin-top: 1rem;
`;

const ToDoLogo = styled(CheckMarkLogo)``;
export { ToDoWrapper, ToDoHeader, ToDoLogo, ToDoHeaderSection };
