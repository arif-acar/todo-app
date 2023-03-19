import React from "react";
import { CheckboxWrapper, CheckboxLabel, CloseButton } from "./CheckboxStyle";

export function Checkbox({
  disabled,
  inputStyle,
  label,
  name,
  onChange,
  placeholder,
  readOnly,
  value,
}) {
  return (
    <CheckboxWrapper>
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
        type="checkbox"
      />
      <CheckboxLabel> {label}</CheckboxLabel>
      <CloseButton></CloseButton>
    </CheckboxWrapper>
  );
}
