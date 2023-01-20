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
  email: yup
    .string()
    .email("Invalid email. Check if your email is entered correctly")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const Signup: FC = () => {
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupProps>({
    resolver: yupResolver(schema),
  });

  const watchAllFields = watch();

  const onSubmit = (fieldsData: ISignupProps) => {
    console.log("data:", fieldsData);
    if (fieldsData.password === fieldsData.passwordConfirm) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }
  };

  const selectErrPasswordMessage = (message?: string) => {
    if (message) return message;
    if (!isPasswordMatch) return "Password mismatch";
  };

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused({ ...isFocused, [evt.target.name]: true });
  };

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
            <FormField
              label="Email"
              name="email"
              type="text"
              register={register}
              error={errors.email && errors.email?.message}
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
            <FormField
              label="Confirm password"
              name="passwordConfirm"
              type="password"
              register={register}
              error={selectErrPasswordMessage(errors.passwordConfirm?.message)}
              isFocused={isFocused.passwordConfirm}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
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
