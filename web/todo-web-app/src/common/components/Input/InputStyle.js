import styled from "styled-components";

const InputWrapper = styled.div`
  height: 65px;
  display: flex;
  margin-bottom: 35px;

  input {
    color: black;
    height: 50px;
    width: 100%;
    font-size: 16px;
    font-family: MarkPro;
    transition: border, color 0.2s ease-in-out;
    background: transparent;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #9ea3b2;

    ::placeholder {
      color: #9ea3b2;
    }

    :focus {
      border-bottom: 1px solid #1f2a4b;
      background: transparent;
    }
  }
`;

export { InputWrapper };
