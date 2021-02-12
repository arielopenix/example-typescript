import "date-fns";
import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

type DatePickerProps = {
  id: string;
  value: Date | null;
  label: string;
  onchange: any;
};

const DatePicker = ({ id, value, label, onchange }: DatePickerProps) => {
  return (
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      id={id}
      label={label}
      value={value}
      onChange={onchange}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  );
};
export default DatePicker;
