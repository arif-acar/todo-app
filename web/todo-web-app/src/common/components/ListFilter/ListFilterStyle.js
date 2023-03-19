import styled from "styled-components";

export const ListFilterWrapper = styled.div`
  display: flex;
  margin-top: 35px;
  padding: 0;
  list-style-type: none;
  align-items: flex-start;
  flex-direction: row;
`;

export const ListFilterLabel = styled.div`
  font-family: MarkPro;
  font-size: 14px;
  font-weight: 500;
  color: rgba(31, 42, 75, 0.59);
  margin-right: 17px;
`;

export const ListFilterOption = styled.button`
  border: none;
  background: transparent;
  font-family: MarkPro;
  font-size: 14px;
  ${({ active }) =>
    active &&
    `
    color: #4a77e5;
    background: transparent;
    text-decoration: underline;
`}
`;
