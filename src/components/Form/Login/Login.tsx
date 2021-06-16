import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ChangeEvent, useState } from "react";
import URLS from "../../../config/urls";
import { useActions } from "../../../hooks/useActions";
import { IAuth } from "../../../Redux/reducers/auth";
import CustomInput, { CustomInputProps } from "../../CustomInput/CustomInput";

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  textInputs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const inputs: CustomInputProps[] = [
  {
    id: "email",
    label: "Email",
  },
  {
    id: "password",
    label: "Пароль",
  },
];

export interface ILoginForm {
  login: string;
  password: string;
}

const okUser: IAuth = {
  id: 1,
  email: "dadad",
  name: "sa",
  surname: "as",
  patronymic: "sa",
  group: "da",
};

const Login = () => {
  const {authorize} = useActions();
  const classes = useStyles();
  const [fd, setFd] = useState<ILoginForm>({} as ILoginForm);

  const formHandler = async (e: any) => {
    e.preventDefault();
    authorize(okUser);
    await fetch(URLS.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(fd),
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFd({ ...fd, [e?.target?.id]: e.target.value });
  };

  return (
    <form onSubmit={formHandler} className={classes.form}>
      <div className={classes.textInputs}>
        {inputs.map((input) => (
          <CustomInput key={input.id} handler={handleChange} {...input} />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Вход
        </Button>
      </div>
    </form>
  );
};

export default Login;
