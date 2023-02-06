import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, CustomLink, FormField } from "../../components";
import { normalizePhoneNumber } from "../../utils/normalizePhoneNumber";
import { useInputFocus } from "../../hooks/useInputFocus";
import { usePasswordMatch } from "../../hooks/usePasswordMatch";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Signup.module.scss";
import { signup } from "../../http/userApi";
import { observer } from "mobx-react-lite";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/constants";

export interface ISignupForm {
  // firstName: string;
  // lastName: string;
  // phoneNumber: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const schema = yup.object().shape({
  // firstName: yup
  //   .string()
  //   .matches(/^([^0-9]*)$/, "The first name must not contain numbers")
  //   .required("First name is required"),
  // lastName: yup
  //   .string()
  //   .matches(/^([^0-9]*)$/, "The last name must not contain numbers")
  //   .required("Last name is required"),
  // phoneNumber: yup.string().required("Phone number is required"),
  email: yup
    .string()
    .email("Invalid email. Check if your email is entered correctly")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const Signup: React.FC = observer(() => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({
    resolver: yupResolver(schema),
  });

  const [inputs, setInputs] = useState({
    // firstName: false,
    // lastName: false,
    // phoneNumber: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const { isFocused, handleFocus, handleBlur } = useInputFocus({
    inputs,
    watch,
  });
  const { setIsPasswordMatch, selectErrPasswordMessage } = usePasswordMatch();

  const onSubmit = async (formData: ISignupForm) => {
    console.log("formData ==>", formData);
    try {
      let response;
      if (formData.password === formData.passwordConfirm) {
        setIsPasswordMatch(true);
        response = await signup(formData.email, formData.password);
        console.log("signup  onSubmit response ==>", response);
        user.setUser(user);
        user.setIsAuth(true);
        navigate(SHOP_ROUTE);
      } else {
        setIsPasswordMatch(false);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Signup error ==>", err.message);
        alert(err.message);
      }
    }
  };

  return (
    <section className={styles.signup} data-testid="Signup">
      <div className={styles.signup__content}>
        <h1 className={styles.signup__title}>Signup</h1>
        <form
          className={styles.signup__form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.form__fields}>
            {/* <FormField
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
              label="Phone number"
              name="phoneNumber"
              type="tel"
              register={register}
              error={errors.phoneNumber && errors.phoneNumber?.message}
              isFocused={isFocused.phoneNumber}
              isRequired
              onFocus={handleFocus}
              onBlur={handleBlur}
            /> */}
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
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <Button typeButton="submit" className={styles.form__button}>
            Signup
          </Button>
          <CustomLink href="/signin">Signin</CustomLink>
        </form>
      </div>
    </section>
  );
});
