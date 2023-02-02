import React, { FC, DOMAttributes } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  typeButton?: ButtonType;
  onClick?: (evt: React.MouseEvent) => void;
}

export const Button: FC<IButtonProps> = ({
  children,
  className,
  isDisabled,
  typeButton = "button",
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.button_disabled]: isDisabled,
      })}
      disabled={isDisabled}
      type={typeButton}
      onClick={onClick}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};
