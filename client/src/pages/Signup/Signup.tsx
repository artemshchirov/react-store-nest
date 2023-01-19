import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Signup.module.scss";
import { Button, FormField } from "../../components";

export interface ISignupProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "The first name must not contain numbers")
    .required("First name is required"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "The last name must not contain numbers")
    .required("Last name is required"),
});

export const Signup: FC = () => {
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    password: false,
    rePassword: false,
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupProps>({
    resolver: yupResolver(schema),
  });

  const watchAllFields = watch();

  const onSubmit = (data: ISignupProps) => {
    console.log("data:", data);
  };

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused({ ...isFocused, [evt.target.name]: true });
  };
  console.log(isFocused);

  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (watchAllFields[evt.target.name as keyof ISignupProps] !== "") {
      setIsFocused({ ...isFocused, [evt.target.name]: true });
    } else {
      setIsFocused({ ...isFocused, [evt.target.name]: false });
    }
  };

  return (
    <div className={styles.signup} data-testid="Signup">
      <div className={styles.signup__content}>
        <h1 className={styles.signup__title}>Signup</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form__fields}>
            <FormField
              label="First name"
              name="firstName"
              type="text"
              register={register}
              error={errors.firstName && errors.firstName?.message}
              isFocused={isFocused.firstName}
              isRequired
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <FormField
              label="Last name"
              name="lastName"
              type="text"
              register={register}
              error={errors.lastName && errors.lastName?.message}
              isFocused={isFocused.lastName}
              isRequired
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <Button typeButton="submit" className={styles.form__button}>
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};