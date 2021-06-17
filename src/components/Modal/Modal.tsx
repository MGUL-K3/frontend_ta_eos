import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    width: theme.spacing(16),
    height: theme.spacing(8),
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

const Modal = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} variant="outlined">
      Something wrong
    </Paper>
  );
};

export default Modal;
