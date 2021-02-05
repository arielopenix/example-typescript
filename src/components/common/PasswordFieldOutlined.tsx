import React from "react";
import TextField from "@material-ui/core/TextField";

type TextPasswordOutlinedProps = {
  name: string;
  value: string;
  label: string;
  onchange: Function;
};

const TextPasswordOutlined = ({
  name,
  value,
  label,
  onchange,
}: TextPasswordOutlinedProps) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      type="password"
      value={value}
      onChange={() => onchange}
      id={name}
      autoComplete="current-password"
    />
  );
};

export default TextPasswordOutlined;
