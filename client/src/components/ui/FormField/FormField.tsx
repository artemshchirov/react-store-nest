import React, { useState } from "react";
import { FieldValues, Path } from "react-hook-form";
import styles from "./FormField.module.scss";
import classNames from "classnames";
import { Input, Icon } from "../../ui";
import InputPhone from "../Input/InputPhone";

export type FormFieldType = "text" | "number" | "password" | "tel" | "textarea";

export interface IFormFieldProps<T extends FieldValues> {
  className?: string;
  error?: string;
  label?: string;
  name?: string | Path<T>;
  // register?: (Ref, RegisterOptions?) => { onChange; onBlur; name; ref };
  register?: any; // TODO refactor any
  type: FormFieldType;
  isFocused?: boolean;
  isRequired?: boolean;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (evt: React.FocusEvent<HTMLInputElement>) => void;
}

export const FormField = <T extends FieldValues>({
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

  const handleType = (inputType: string) => {
    if (inputType === "text") {
      return "text";
    }
    if (inputType === "number") {
      return "number";
    }
    if (inputType === "password") {
      inputType = isShowPassword ? "text" : "password";
      return inputType;
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
        error={error}
        name={name}
        type={handleType(type)}
        onFocus={onFocus}
        onBlur={onBlur}

        // TODO add exclude + and - in numbers
        // onKeyPress={(event) => {
        //   if (!/[0-9]/.test(event.key)) {
        //     event.preventDefault();
        //   }
        // }}
      />
    );
  };

  return (
    <div
      className={classNames(styles.formField, className, {
        [styles.formField_active]: isFocused,
      })}
    >
      <label className={styles.formField__label} htmlFor={name}>
        {label}
        {isRequired && (
          <span className={styles.formField__label_required}>*</span>
        )}
      </label>

      {(type === "text" || type === "number") && (
        <>
          {renderInput()}
          {error && <span className={styles.formField_error}>{error}</span>}
        </>
      )}

      {type === "password" && (
        <>
          {renderInput()}
          <div
            className={styles.formField__icon_visibility}
            onClick={handlePasswordShow}
          >
            {isShowPassword ? (
              <Icon type="VisibilityOff" size="small" />
            ) : (
              <Icon type="Visibility" />
            )}
          </div>
          {error && <span className={styles.formField_error}>{error}</span>}
        </>
      )}

      {type === "tel" && (
        <>
          <InputPhone
            className={classNames({
              [styles.input_active]: isFocused,
              [styles.input_error]: error,
            })}
            {...(register ? register(name) : register)}
            error={error}
            name={name}
            type={type}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {error && <span className={styles.formField_error}>{error}</span>}
        </>
      )}
    </div>
  );
};
