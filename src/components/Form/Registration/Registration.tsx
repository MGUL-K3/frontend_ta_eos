import { makeStyles, Theme } from "@material-ui/core/styles";
import { ChangeEvent, useState } from "react";
import URLS from "../../../config/urls";
import { IForm } from "../Form";
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
          <CustomInput handler={handleChange} {...input} />
        ))}
      </div>
      <input type="submit" />
    </form>
  );
};

export default Registration;
