import React, { FC } from "react";
import styles from "./FormField.module.scss";
import classNames from "classnames";

export type FormFieldType = "text" | "password" | "tel" | "textarea";

export interface IFormFieldProps {
  className?: string;
  error?: string;
  label?: string;
  name?: string;
  type: FormFieldType;
  isFocused?: boolean;
  isRequired?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const FormField: FC<IFormFieldProps> = ({
  className,
  error,
  label,
  name,
  type,
  isFocused,
  isRequired,
  onBlur,
  onFocus,
}) => {
  return (
    <div
      className={classNames(styles.formField, className, {
        formField_active: isFocused,
      })}
      data-testid="FormField"
    >
      <label className={styles.formField__label} htmlFor={name}>
        {label}
        {isRequired ? (
          <span className={styles.formField__label_required}>*</span>
        ) : null}
      </label>
      {type === "text" ? (
        <>
          <input
            className={classNames({
              formField__input_active: isFocused,
              formField__input_error: error,
            })}
            name={name}
            error={error}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {error ? (
            <span className={styles.formField__error}>{error}</span>
          ) : null}
        </>
      ) : null}
    </div>
  );
};
