import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import {
  ListFilterWrapper,
  ListFilterLabel,
  ListFilterOption,
} from "./ListFilterStyle";

export function ListFilter({ options, onChange }) {
  return (
    <ListFilterWrapper>
      <ListFilterLabel>Show:</ListFilterLabel>

      {options?.map((option) => (
        <ListFilterOption
          active={option.active}
          onClick={() => onChange(option.name)}
        >
          {option.name}
        </ListFilterOption>
      ))}
    </ListFilterWrapper>
  );
}
