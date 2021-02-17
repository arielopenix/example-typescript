import React from "react";
import TextField from "@material-ui/core/TextField";

type TextFieldOutlinedProps = {
  name: string;
  value: string;
  type: string;
  label: string;
  onchange: any;
  inputref: any;
};

const TextFieldOutlined = ({
  name,
  type,
  label,
  onchange,
  value,
  inputref
}: TextFieldOutlinedProps) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      value={value}
      type={type}
      id={name}
      label={label}
      inputRef={inputref}
      name={name}
      autoComplete={name}
      onChange={(e:React.FormEvent) => onchange(e)}
      autoFocus
    />
  );
};

export default TextFieldOutlined;
