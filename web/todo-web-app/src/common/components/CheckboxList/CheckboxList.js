import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { ListWrapper } from "./ChecboxListStyle";

export function CheckboxList({ list, filter, onChange, onDelete }) {
  return (
    <ListWrapper>
      {list
        .filter((item) => {
          if (filter.toLowerCase() === "all") return true;
          else {
            return item?.status?.toLowerCase() === filter?.toLowerCase();
          }
        })
        .map((item) => (
          <li>
            <Checkbox
              id={item.id}
              label={item.name}
              checked={item?.status === "complete" ? true : false}
              onChange={onChange}
              onDelete={onDelete}
            ></Checkbox>
          </li>
        ))}
    </ListWrapper>
  );
}
