import React from "react";
import Button from "@material-ui/core/Button";

type SubmitButtonProps = {
  value: string;
  classname: string;
  disabled: boolean;
  colorbutton: "default" | "inherit" | "primary" | "secondary";
};

const SubmitButton = ({
  value,
  colorbutton,
  classname,
  disabled
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      disabled={disabled}
      color={colorbutton}
      className={classname}
    >
      {value}
    </Button>
  );
};

export default SubmitButton;
