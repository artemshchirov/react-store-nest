import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
} from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

export interface IInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  name?: string;
  type?: string;
  error?: string;
  value?: string;
}

export const Input = forwardRef(
  (
    { className, name, type, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <>
        <input
          className={classNames(className, styles.input, {
            [styles.input_error]: error,
          })}
          name={name}
          type={type}
          ref={ref}
          // TODO check initial autofill (include <InputPhone />) in other browsers
          readOnly // fix chrome initial autofill bug
          {...rest}
        />
      </>
    );
  }
);

Input.displayName = "Input";
