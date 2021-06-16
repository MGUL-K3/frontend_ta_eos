import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ChangeEvent, useState } from "react";
import URLS from "../../../config/urls";
import { IRegistrationForm } from "../Form";
import CustomInput from "../../CustomInput";
import { CustomInputProps } from "../../CustomInput/CustomInput";

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
    id: "sumname",
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
  const [fd, setFd] = useState<IRegistrationForm>({} as IRegistrationForm);

  const formHandler = async (e: any) => {
    e.preventDefault();

    await fetch(URLS.registr, {
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
    <form
      onSubmit={formHandler}
      className={classes.form}
      noValidate
      autoComplete="off"
    >
      <div className={classes.textInputs}>
        {inputs.map((input) => (
          <CustomInput key={input.id} handler={handleChange} {...input} />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Зарегестрироваться
        </Button>
      </div>
    </form>
  );
};

export default Registration;
