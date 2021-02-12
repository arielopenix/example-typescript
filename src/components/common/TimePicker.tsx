import "date-fns";
import React from "react";
import { KeyboardTimePicker } from "@material-ui/pickers";

type TimePickerProps = {
  id: string;
  value: Date | null;
  label: string;
  onchange: any;
};

const TimePicker = ({ id, value, label, onchange }: TimePickerProps) => {
  return (
    <KeyboardTimePicker
      margin="normal"
      id={id}
      label={label}
      value={value}
      onChange={onchange}
      KeyboardButtonProps={{
        "aria-label": "change time",
      }}
    />
  );
};

export default TimePicker;
