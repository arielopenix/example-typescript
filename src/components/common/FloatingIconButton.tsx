import React from "react";
import Fab from "@material-ui/core/Fab";

type FloatingIconButtonProps = {
  children: Node;
  arialabel: string;
  color: "default" | "inherit" | "primary" | "secondary";
};

const FloatingIconButton = ({children,arialabel,color}:FloatingIconButtonProps) => {
  return (
    <Fab color={color} aria-label={arialabel}>
      {children}
    </Fab>
  );
};

export default FloatingIconButton;
