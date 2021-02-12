import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

type Item = {
  value: string | number;
  title: string | number;
};

type SimpleSelectProps = {
  id: string;
  label: string;
  value: any;
  handlechange: any;
  items: Item[];
};

const SimpleSelect = ({
  id,
  label,
  value,
  handlechange,
  items,
}: SimpleSelectProps) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={id}>Age</InputLabel>
      <Select labelId={id} id={id} value={value} onChange={handlechange}>
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SimpleSelect;
