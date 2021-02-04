import React from 'react';
import Button from "@material-ui/core/Button";

type SubmitButtonProps = {
    name: string,
    onclick: string,
    classname: string,
}
const SubmitButton = ({name, onclick, classname }: SubmitButtonProps) => {
    return(
    <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classname}
    >{name}
    </Button>
    )
}

export default SubmitButton;