import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ChangeEvent, useState } from "react";
import URLS from "../../../config/urls";
import { IRegistrationForm } from "../Form";
import CustomInput from "../../CustomInput";
import { CustomInputProps } from "../../CustomInput/CustomInput";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import auth, { IAuth } from "../../../Redux/reducers/auth";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

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
  {
    id: "name",
    label: "Имя",
  },
  {
    id: "surname",
    label: "Фамилия",
  },
  {
    id: "patronymic",
    label: "Отчество",
  },
  {
    id: "group",
    label: "Группа",
  },
];

const Registration = () => {
  const classes = useStyles();
  const token = useTypedSelector((store) => store.auth?.token);
  const { authorize, showModal } = useActions();
  const [fd, setFd] = useState<IRegistrationForm>({} as IRegistrationForm);

  const formHandler = (e: any) => {
    e.preventDefault();
    let headers: HeadersInit | undefined;
    
    if (document.cookie && token) {
      headers = {
        "Content-Type": "application/json;charset=utf-8",
        "X-CSRFToken" : token
      }
    } else {
      headers = {
        "Content-Type": "application/json;charset=utf-8",
      }
    }

    fetch(URLS.registr, {
      method: "POST",
      headers,
      body: JSON.stringify(fd),
    })
      .then((res) => res.json())
      .then((json) => {
        json.token = document.cookie.split("=")[1];
        return json;
      })
      .then((final) => authorize(final as IAuth))
      .catch((error) => showModal("Ошибка"));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFd({ ...fd, [e?.target?.id]: e.target.value });
  };

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <div className={classes.textInputs}>
        {inputs.map((input) => (
          <CustomInput key={input.id} handler={handleChange} {...input} />
        ))}
        <Button
          onClick={formHandler}
          component={Link}
          to="/"
          variant="contained"
          color="primary"
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};

export default Registration;
