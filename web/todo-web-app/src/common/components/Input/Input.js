import React from "react";
import { InputWrapper } from "./InputStyle";

export function Input({
  disabled,
  inputStyle,
  name,
  onChange,
  placeholder,
  readOnly,
  type,
  value,
}) {
  return (
    <InputWrapper>
      <input
        aria-label={name}
        data-testid={name}
        tabIndex={0}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        style={inputStyle}
        disabled={disabled}
        readOnly={readOnly}
        type="text"
      />
    </InputWrapper>
  );
}
