import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ChangeEvent, useState } from "react";
import CustomInput, { CustomInputProps } from "../CustomInput/CustomInput";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: "32px 32px",
    display: "grid",
    gridTemplateRows: "1fr",
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacing(24),
    height: theme.spacing(24),
    backgroundColor: grey[200],
    borderRadius: "16px",
    transition: "all 0.5s",
  },
  selected: {
    gridTemplateRows: "0.1fr 1fr",
    justifyItems: "center",
    padding: "32px 32px",
    transition: "all 0.5s",
    width: theme.spacing(200),
    height: theme.spacing(84),
  },
  select: {
    justifySelf: "flex-start"
  },
  inputs: {
    display: "grid",
    gap: theme.spacing(4)
  }
}));

export enum multiplyEnum {
  NONE = "",
  DIRECT_SHIFT_RIGHT = "Прямой код со сдвигом влево",
}

export interface IMath {
  firstVal: string;
  secondVal: string;
}

const inputs: CustomInputProps[] = [
  {
    id: "firstVal",
    label: "Число A",
  },
  {
    id: "secondVal",
    label: "Число B",
  },
];

const Math = () => {
  const classes = useStyles();
  const [multiply, setMultiply] = useState<string>(multiplyEnum.NONE);
  const [math, setMath] = useState<IMath>({} as IMath);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMultiply(event.target.value as string);
  };

  const inputHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setMath({ ...math, [e?.target?.id]: e.target.value });
  };

  return (
    <Paper
      className={`${classes.container} ${
        multiply === multiplyEnum.NONE ? "" : classes.selected
      }`}
      variant="outlined"
    >
      <div className="header">
        <FormControl className={ multiply === multiplyEnum.NONE ? "" : classes.select}>
          <InputLabel id="select-multipy-label">Умножение</InputLabel>
          <Select
            labelId="select-multipy-label"
            id="select-multiply"
            value={multiply}
            onChange={handleChange}
          >
            <MenuItem value={multiplyEnum.DIRECT_SHIFT_RIGHT}>
              {multiplyEnum.DIRECT_SHIFT_RIGHT}
            </MenuItem>
          </Select>
          <FormHelperText>Выберите способ умноженя</FormHelperText>
        </FormControl>
      </div>
      {multiply !== multiplyEnum.NONE ? (
        <div className={classes.inputs}>
          <div >
            {inputs.map((input) => (
              <CustomInput
                handler={inputHandleChange}
                key={input.id}
                {...input}
              />
            ))}
          </div>
          <Button variant="contained" color="primary">
            Решить
          </Button>
        </div>
      ) : (
        ""
      )}
    </Paper>
  );
};

export default Math;
