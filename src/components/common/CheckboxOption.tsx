import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

type CheckBoxOptionProps = {
    checked: boolean,
    onchange: any,
    inputprops: Object

}

const CheckBoxOption = ({checked,onchange,inputprops}:CheckBoxOptionProps) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onchange}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
}

export default CheckBoxOption;
