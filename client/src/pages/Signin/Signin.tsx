import React, { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button, FormField } from "../../components";
import { CustomLink } from "../../components/CustomLink/CustomLink";
import { useInputFocus } from "../../hooks/useInputFocus";
import { usePasswordMatch } from "../../hooks/usePasswordMatch";
import { signin } from "../../http/userApi";
import styles from "../Signup/Signup.module.scss"; // TODO? import styles for signin not from signup
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/constants";
import { observer } from "mobx-react";

export interface ISigninForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email. Check if your email is entered correctly")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const Signin: React.FC = observer(() => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISigninForm>({ resolver: yupResolver(schema) });

  const onSubmit = async (formData: ISigninForm) => {
    console.log("formData ==>", formData);
    try {
      let response;
      response = await signin(formData.email, formData.password);
      console.log("signin  onSubmit response ==>", response);
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Signin error ==>", err.message);
        alert(err.message);
      }
    }
  };

  const [inputs, setInputs] = useState({
    email: false,
    password: false,
  });

  const { isFocused, handleFocus, handleBlur } = useInputFocus({
    inputs,
    watch,
  });
  const { selectErrPasswordMessage } = usePasswordMatch();

  return (
    <section className={styles.signup} data-testid="Signin">
      <div className={styles.signup__content}>
        <h1 className={styles.signup__title}>Signin</h1>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.form__fields}>
            <FormField
              label="Email"
              name="email"
              type="text"
              register={register}
              error={errors.email && errors.email.message}
              isFocused={isFocused.email}
              isRequired
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              register={register}
              error={selectErrPasswordMessage(errors.password?.message)}
              isFocused={isFocused.password}
              isRequired
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <Button typeButton="submit" className={styles.form__button}>
            Signin
          </Button>
          <CustomLink href="/signup">Signup</CustomLink>
        </form>
      </div>
    </section>
  );
});
