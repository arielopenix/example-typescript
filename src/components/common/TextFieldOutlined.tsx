import React from "react";
import TextField from "@material-ui/core/TextField";

type TextFieldOutlinedProps = {
    name: string,
    value: string,
    label: string,
    onchange: Function,
}

const TextFieldOutlined = ({name, value, label, onchange}: TextFieldOutlinedProps) => {
    return(
    <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        onChange={() => onchange}
        value={value}
        id={name}
        label={label}
        name={name}
        autoComplete={name}
        autoFocus
    />);
}

export default TextFieldOutlined;