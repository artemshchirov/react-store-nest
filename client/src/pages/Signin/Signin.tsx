import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button, FormField } from "../../components";
import styles from "../Signup/Signup.module.scss"; // TODO? import styles for signin not from signup
// import { useDispatch } from "react-redux";
// import { getToken } from "services/account";
import { CustomLink } from "../../components/CustomLink/CustomLink";

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

export const Signin: React.FC = () => {
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISigninForm>({ resolver: yupResolver(schema) });

  const watchAllFields = watch();

  const onSubmit = (formData: ISigninForm) => {
    console.log("formData:", formData);
  };

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused({ ...isFocused, [evt.target.name]: true });
    // fix chrome initial autofill bug
    evt.target.removeAttribute("readOnly");
  };

  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (watchAllFields[evt.target.name as keyof ISigninForm] !== "") {
      setIsFocused({ ...isFocused, [evt.target.name]: true });
    } else {
      setIsFocused({ ...isFocused, [evt.target.name]: false });
    }
    // fix chrome initial autofill bug
    evt.currentTarget.setAttribute("readOnly", evt.currentTarget.value);
  };

  const selectErrPasswordMessage = (message: string | undefined) => {
    if (message) {
      return message;
    }
  };

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
};
