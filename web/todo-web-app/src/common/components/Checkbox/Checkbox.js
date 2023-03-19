import React from "react";
import { CheckboxWrapper, CheckboxLabel, CloseButton } from "./CheckboxStyle";

export function Checkbox({
  id,
  disabled,
  inputStyle,
  label,
  name,
  onChange,
  onDelete,
  placeholder,
  readOnly,
  value,
  checked,
}) {
  return (
    <CheckboxWrapper>
      <input
        aria-label={name}
        data-testid={name}
        tabIndex={0}
        name={name}
        onChange={(event) => onChange(event.target.checked, id)}
        placeholder={placeholder}
        value={value}
        style={inputStyle}
        disabled={disabled}
        readOnly={readOnly}
        type="checkbox"
        checked={checked}
      />
      <CheckboxLabel> {label}</CheckboxLabel>
      <CloseButton onClick={() => onDelete(id)}></CloseButton>
    </CheckboxWrapper>
  );
}
