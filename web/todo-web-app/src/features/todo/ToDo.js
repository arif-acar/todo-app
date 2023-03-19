import React from "react";
import {
  ToDoWrapper,
  ToDoHeader,
  ToDoLogo,
  ToDoHeaderSection,
} from "./TodoStyles";

import { Input } from "../../common/components/Input/Input";
import { Checkbox } from "../../common/components/Checkbox/Checkbox";

export function ToDo() {
  return (
    <ToDoWrapper>
      <ToDoHeaderSection>
        <ToDoLogo />
        <ToDoHeader>Todo List</ToDoHeader>
      </ToDoHeaderSection>
      <Input placeholder={"Add new todo"} />
      <Checkbox label={"Add new todo"} />
    </ToDoWrapper>
  );
}
