import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

type Option = {
  value: string;
  label: string;
};

type RadioButtonsGroupsProps = {
  title: string;
  name: string;
  value: string;
  handlechange: any;
  options: Option[];
};

const RadioButtonsGroup = ({
  title,
  value,
  handlechange,
  options,
  name,
}: RadioButtonsGroupsProps) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <RadioGroup
        aria-label={name}
        name={name}
        value={value}
        onChange={handlechange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioButtonsGroup;