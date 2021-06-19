import classes from "*.module.css";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { IMath, IResult } from "../Math";
import {Fade} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    display: "grid",
    gap: theme.spacing(3),
    gridTemplateColumns: "repeat(3, 1fr)",
    gridArea: "math",
  },
  showBit: {
    "& > p": {
      margin: 0,
      textAlign: "end",
      fontSize: "20px",
    },
  },
  showPow: {
    "& > p": {
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  res: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  row: {
    margin: 0,
    fontSize: "20px",
  },
  lastRow: {
    borderBottom: "1px solid black",
  },
  space: {
    margin: 0,
    fontSize: "20px",
    color: "rgb(238, 238, 238)",
  },
  final: {
    borderTop: "1px solid black",
  },
  stretch: {
    border: "1px dotted black",
  },
  up: {
    fontSize: "12px",
  },
  down: {
    fontSize: "7px",
  },
}));

export interface ResProps {
  input: IMath;
  res: IResult[];
  tmpRow: number;
}

const Res = ({ res, input, tmpRow }: ResProps) => {
  const classes = useStyles();
  const [savedInput, setSavedInput] = useState<IMath>({} as IMath);

  useEffect(() => {
    setSavedInput(input);
  }, [res]);

  const getRow = (count: number | null, val: string, num: number) => {
    if (count === null) {
      return <Fade in={tmpRow > num} timeout={{enter: 1500, exit: 0}}><span className={classes.final}>{val}</span></Fade>;
    }
    const res: any[] = [];
    val.split("").map((bit) => res.push(<span>{bit}</span>));

    for (let i = 0; i < count; i++) {
      res.push(<span className={classes.space}>_</span>);
    }

    return <Fade in={tmpRow > num} timeout={{enter: 1500, exit: 0}}><span>{res}</span></Fade>;
  };

  const getShowBit = (row: IResult, num: number) => {
    if (row.bin_dec !== null) {
      return (
          <Fade in={tmpRow > num} timeout={{enter: 1500, exit: 0}}>
            <p className={classes.row}>
              b<sub className={classes.down}>{row.index}</sub>={row.bin_dec}
            </p>
          </Fade>
      );
    }
    return <Fade in={tmpRow > num} timeout={{enter: 1500, exit: 0}}><p className={classes.row}>П =</p></Fade>;
  };

  return (
    <div className={classes.layout}>
      <div className={classes.showBit}>
        <p>A</p>
        <p>B</p>
        {res.map((row, num) => getShowBit(row, num))}
      </div>
      <div className={classes.res}>
        <p className={classes.row}>{savedInput.firstVal}</p>
        <p className={`${classes.row} ${classes.lastRow}`}>
          {savedInput.secondVal}
        </p>
        {res.map((row, num) => (
          <p className={classes.row}>{getRow(row.index, row.value, num)}</p>
        ))}
      </div>
      <div className={classes.showPow}>
        <p className={classes.space}>_</p>
        <p className={classes.space}>_</p>
        {res.map((row, index) =>
          index !== res.length - 1 ? (
              <Fade in={tmpRow > index} timeout={{enter: 1500, exit: 0}}>
                  <p className={classes.row}>
                    A·2<sup className={classes.up}>{row.index}</sup>&nbsp;b
                    <sub className={classes.up}>{row.index}</sub>
                  </p>
              </Fade>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Res;
