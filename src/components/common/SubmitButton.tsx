import React from 'react';
import Button from "@material-ui/core/Button";

type SubmitButtonProps = {
    value: string,
    onclick: Function,
    classname: string,
}

const SubmitButton = ({value, onclick, classname }: SubmitButtonProps) => {
    return(
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classname}
        onClick={()=>onclick}
      >
        {value}
      </Button>
    )
}

export default SubmitButton;