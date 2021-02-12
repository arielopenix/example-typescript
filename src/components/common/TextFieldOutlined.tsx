import React from "react";
import TextField from "@material-ui/core/TextField";

type TextFieldOutlinedProps = {
    name: string,
    type: string,
    label: string,
}

const TextFieldOutlined = ({name, type, label}: TextFieldOutlinedProps) => {
    return(
    <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        type={type}
        id={name}
        label={label}
        name={name}
        autoComplete={name}
        autoFocus
    />);
}

export default TextFieldOutlined;