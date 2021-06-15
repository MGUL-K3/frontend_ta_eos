import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    tabBar: {
      "& .MuiTabs-flexContainer": {
        justifyContent: "center",
      },
    },
  }));

const Login = () => {
  const classes = useStyles();

    return (
        <form className="login">
            login
        </form>
    )
};

export default Login;
