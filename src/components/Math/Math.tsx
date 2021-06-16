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
import Res from "./Res";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    gridArea: "header",
  },
  container: {
    gridTemplateAreas: `
      '. header .'
      '. inputs .'
    `,
    padding: "32px 32px",
    display: "grid",
    gridTemplateRows: "1fr",
    alignItems: "center",
    width: theme.spacing(24),
    height: theme.spacing(24),
    backgroundColor: grey[200],
    borderRadius: "16px",
    transition: "all 0.5s",
  },
  containerGetted: {
    transition: "all 0.5s",
    justifyContent: "initial",
    gridTemplateColumns: "repeat(3,1fr)",
    gridTemplateAreas: `
      '. header .'
      'inputs math .'
    `,
  },
  selected: {
    gridTemplateRows: "0.1fr 1fr",
    justifyItems: "center",
    padding: "32px 32px",
    transition: "all 0.5s",
    width: theme.spacing(200),
    height: theme.spacing(54),
  },
  select: {
    justifySelf: "flex-start",
  },
  inputs: {
    transition: "all 0.5s",
    display: "grid",
    gridArea: "inputs",
    gap: theme.spacing(4),
  },
  res: {
    transition: "all 0.5s",
    gridArea: "math",
  },
}));

export enum multiplyEnum {
  NONE = "",
  DIRECT_SHIFT_RIGHT = "Прямой код со сдвигом влево",
}

export interface IMath {
  firstVal: string;
  secondVal: string;
}

export interface IResult {
  index: number | null;
  bin_dec: string | null;
  value: string;
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

const okRes: IResult[] = [
  {
    index: 0,
    bin_dec: "1",
    value: "10010",
  },
  {
    index: 1,
    bin_dec: "0",
    value: "00000",
  },
  {
    index: 2,
    bin_dec: "1",
    value: "10010",
  },
  {
    index: 3,
    bin_dec: "0",
    value: "00000",
  },
  {
    index: 4,
    bin_dec: "1",
    value: "10010",
  },
  {
    index: null,
    bin_dec: null,
    value: "101111010",
  },
];

const okInit: IMath = {
  firstVal: "10010",
  secondVal: "10101",
};

const Math = () => {
  const classes = useStyles();
  const [multiply, setMultiply] = useState<string>(multiplyEnum.NONE);
  const [math, setMath] = useState<IMath>({ ...okInit } as IMath);
  const [res, setRes] = useState<IResult[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMultiply(event.target.value as string);
  };

  const inputHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setMath({ ...math, [e?.target?.id]: e.target.value });
  };

  const sendMath = () => {
    setRes(okRes);
  };

  return (
    <Paper
      className={`${classes.container} ${
        multiply === multiplyEnum.NONE ? "" : classes.selected
      } 
      ${res.length > 0 ? classes.containerGetted : ""}`}
      variant="outlined"
    >
      <div className={classes.header}>
        <FormControl
          className={multiply === multiplyEnum.NONE ? "" : classes.select}
        >
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
          <div>
            {inputs.map((input) => (
              <CustomInput
                handler={inputHandleChange}
                key={input.id}
                {...input}
              />
            ))}
          </div>
          <Button onClick={sendMath} variant="contained" color="primary">
            Решить
          </Button>
        </div>
      ) : (
        ""
      )}
      {res.length > 0 ? <Res input={math} res={res} /> : ""}
    </Paper>
  );
};

export default Math;
