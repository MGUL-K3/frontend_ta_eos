import { makeStyles, Theme } from "@material-ui/core/styles";
import { ChangeEvent, useState } from "react";
import URLS from "../../../config/urls";
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
    justifyContent: "center"
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

const Login = () => {
  const classes = useStyles();
  const [fd, setFd] = useState<ILoginForm>({} as ILoginForm);

  const formHandler = async (e: any) => {
    e.preventDefault();

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
          <CustomInput handler={handleChange} {...input} />
        ))}
        <input type="submit" />
      </div>
    </form>
  );
};

export default Login;
