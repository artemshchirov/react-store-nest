import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

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
          className={classNames(styles.input, className, {
            input_error: error,
          })}
          name={name}
          type={type}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);

Input.displayName = "Input";
