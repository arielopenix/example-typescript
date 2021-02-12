import React from "react";
import Button from "@material-ui/core/Button";

type SubmitButtonProps = {
  value: string;
  onclick: Function;
  classname: string;
  colorbutton: "default" | "inherit" | "primary" | "secondary";
};

const SubmitButton = ({
  value,
  colorbutton,
  onclick,
  classname,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color={colorbutton}
      className={classname}
      onClick={() => onclick}
    >
      {value}
    </Button>
  );
};

export default SubmitButton;
