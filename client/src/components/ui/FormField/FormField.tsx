import React, { useState } from "react";
import { Path } from "react-hook-form";
import styles from "./FormField.module.scss";
import classNames from "classnames";
import Input from "../Input";

export type FormFieldType = "text" | "password" | "tel" | "textarea";

export interface IFormFieldProps<T> {
  className?: string;
  error?: string;
  label?: string;
  name?: Path<T>;
  // register?: (Ref, RegisterOptions?) => { onChange; onBlur; name; ref };
  register?: any; // TODO: refactor any
  type: FormFieldType;
  isFocused?: boolean;
  isRequired?: boolean;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (evt: React.FocusEvent<HTMLInputElement>) => void;
}

export const FormField = <T,>({
  className,
  error,
  label,
  name,
  register,
  type,
  isFocused,
  isRequired,
  onBlur,
  onFocus,
}: IFormFieldProps<T>): JSX.Element => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handlePasswordShow = () => {
    setIsShowPassword(prevState => !prevState);
  };

  const handleType = (type: string) => {
    if (type === "text") {
      return "text";
    }
    if (type === "password") {
      type = isShowPassword ? "text" : "password";
      return type;
    }
  };

  const renderInput = () => {
    return (
      <Input
        className={classNames({
          [styles.input_active]: isFocused,
          [styles.input_error]: error,
        })}
        {...(register ? register(name) : register)}
        name={name}
        type={handleType(type)}
        error={error}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    );
  };

  return (
    <div
      className={classNames(styles.formField, className, {
        [styles.formField_active]: isFocused,
      })}
      data-testid="FormField"
    >
      <label className={styles.formField__label} htmlFor={name}>
        {label}
        {isRequired && (
          <span className={styles.formField__label_required}>*</span>
        )}
      </label>
      {type === "text" && (
        <>
          {renderInput()}
          {error && <span className={styles.formField_error}>{error}</span>}
        </>
      )}
    </div>
  );
};
