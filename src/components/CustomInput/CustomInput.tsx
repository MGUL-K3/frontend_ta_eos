import TextField from "@material-ui/core/TextField";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { grey, blue } from "@material-ui/core/colors";
import { ChangeEvent } from "react";

export interface CustomInputProps {
  id: string;
  label?: string;
  handler?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  formItem: {
    width: "100%",
    color: blue[800],
    "&:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",
      "& input": {},
      "& fieldset": {
        borderColor: blue[800],
      },
      "&:hover fieldset": {
        borderColor: blue[800],
      },
    },
  },
}));

const CustomInput = ({ handler, id, label }: CustomInputProps) => {
  const classes = useStyles();

  return (
    <TextField
      onChange={handler}
      variant="outlined"
      className={classes.formItem}
      id={id}
      label={label}
    />
  );
};

export default CustomInput;
