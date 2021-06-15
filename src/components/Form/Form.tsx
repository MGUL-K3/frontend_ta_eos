import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { grey, blue } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useState } from "react";
import URLS from "../../config/urls";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  layout: {
    padding: "32px 32px",
    width: theme.spacing(64),
    height: theme.spacing(64),
    backgroundColor: grey[200],
    borderRadius: "16px",
  },
  form: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  formItem: {
    width: "100%",
    color: blue[800],
    "&:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",
      "& input": {
        // color: "white",
      },
      "& fieldset": {
        borderColor: blue[800],
      },
      "&:hover fieldset": {
        borderColor: blue[800],
      },
    },
  },
  textInputs: {
    display: "flex",
    flexWrap: "wrap",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export interface IForm {
  email: string;
  password: string;
  name: string;
  sumname: string;
  patronymic: string;
  group: string;
}

const Form = () => {
  const classes = useStyles();
  const [fd, setFd] = useState<IForm>({} as IForm);

  const formHandler = async (e: any) => {
    e.preventDefault();

    await fetch(URLS.registr, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(fd),
    });
    console.log(JSON.stringify(fd));
  };

  const handleChange = (e: any) => {
    setFd({ ...fd, [e.target.id]: e.target.value });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.layout} variant="outlined">
        <ButtonGroup
          className={classes.btnGroup}
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Регистрация</Button>
          <Button>Авторизация</Button>
        </ButtonGroup>
        <form
          onSubmit={formHandler}
          className={classes.form}
          noValidate
          autoComplete="off"
        >
          <div className={classes.textInputs}>
            <TextField
              onChange={handleChange}
              name="user[name]"
              variant="outlined"
              className={classes.formItem}
              id="email"
              label="Email"
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              className={classes.formItem}
              id="password"
              label="Пароль"
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              className={classes.formItem}
              id="name"
              label="Имя"
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              className={classes.formItem}
              id="sumname"
              label="Фамилия"
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              className={classes.formItem}
              id="patronymic"
              label="Отчетство"
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              className={classes.formItem}
              id="group"
              label="Группа"
            />
          </div>
          <input type="submit" />
        </form>
      </Paper>
    </div>
  );
};

export default Form;
