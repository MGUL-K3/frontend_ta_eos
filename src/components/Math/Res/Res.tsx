import classes from "*.module.css";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { IMath, IResult } from "../Math";

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridArea: "math",
  },
  showBit: {
    paddingRight: theme.spacing(2),
    "& > p": {
      margin: 0,
      textAlign: "end",
      fontSize: "20px",
    },
  },
  showPow: {
    "& > p": {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  res: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
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
    fontSize: "7px"
  }
}));

export interface ResProps {
  input: IMath;
  res: IResult[];
}

const Res = ({ res, input }: ResProps) => {
  const classes = useStyles();

  const getRow = (count: number | null, val: string) => {
    if (count === null) {
      return <span className={classes.final}>{val}</span>;
    }
    const res: any[] = [];
    val.split("").map((bit, index) => res.push(<span>{bit}</span>));

    for (let i = 0; i < count; i++) {
      res.push(<span className={classes.space}>_</span>);
    }

    return res;
  };

  const getShowBit = (row: IResult) => {
    if (row.bin_dec !== null) {
      return (
        <p className={classes.row}>
          b<sub className={classes.down}>{row.index}</sub>={row.bin_dec}
        </p>
      );
    }
    return <p className={classes.row}>П =</p>
  };

  return (
    <div className={classes.layout}>
      <div className={classes.showBit}>
        <p>A</p>
        <p>B</p>
        {res.map((row) => getShowBit(row))}
      </div>
      <div className={classes.res}>
        <p className={classes.row}>{input.firstVal}</p>
        <p className={`${classes.row} ${classes.lastRow}`}>{input.secondVal}</p>
        {res.map((row) => (
          <p className={classes.row}>{getRow(row.index, row.value)}</p>
        ))}
      </div>
      <div className={classes.showPow}>
        <p className={classes.space}>_</p>
        <p className={classes.space}>_</p>
        {res.map((row, index) =>
          index !== res.length - 1 ? (
            <p className={classes.row}>
              A·2<sup className={classes.up}>{row.index}</sup>&nbsp;b
              <sub className={classes.up}>{row.index}</sub>
            </p>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Res;
