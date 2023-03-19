import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  ToDoWrapper,
  ToDoHeader,
  ToDoLogo,
  ToDoHeaderSection,
} from "./TodoStyles";

import { Input } from "../../common/components/Input/Input";
import { CheckboxList } from "../../common/components/CheckboxList/CheckboxList";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  selectTodoList,
  updateTodo,
} from "./toDoSlice";
import { ListFilter } from "../../common/components/ListFilter/ListFilter";

const FILTER_OPTIONS = [
  { name: "All", value: "all", active: true },
  { name: "Completed", value: "complete", active: false },
  { name: "Incompleted", value: "uncomplete", active: false },
];

export function ToDo() {
  const list = useSelector(selectTodoList);
  const [filterOptions, setFilterOptions] = useState(FILTER_OPTIONS);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  useEffect(() => {
    setSelectedFilter(filterOptions.find((option) => option.active).value);
  }, [filterOptions]);

  const handleOnChange = (isChecked, id) => {
    console.log(isChecked, id);
    if (isChecked) {
      dispatch(updateTodo({ id, completionStatus: "complete" }));
    } else {
      dispatch(updateTodo({ id, completionStatus: "uncomplete" }));
    }
  };

  const handleOnDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(createTodo(event.target.value));
      event.target.value = "";
    }
  };

  const handleFilterUpdate = (name) => {
    const updatedOptions = filterOptions.map((option) => {
      option.active = option.name === name;
      return option;
    });

    setFilterOptions(updatedOptions);
  };

  return (
    <ToDoWrapper>
      <ToDoHeaderSection>
        <ToDoLogo />
        <ToDoHeader>Todo List</ToDoHeader>
      </ToDoHeaderSection>
      <Input placeholder={"Add new todo"} onKeyDown={handleKeyDown} />
      <CheckboxList
        list={list}
        filter={selectedFilter}
        onChange={handleOnChange}
        onDelete={handleOnDelete}
      ></CheckboxList>
      <ListFilter options={filterOptions} onChange={handleFilterUpdate} />
    </ToDoWrapper>
  );
}
