import React, { DOMAttributes, memo } from "react";
import styles from "./Icon.module.scss";
import classNames from "classnames";
import { IconType, iconTypes } from "./IconType";

export type IconSizeType = "small";

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string;
  size?: IconSizeType;
  type: IconType;
  onClick?: () => void | Promise<void>;
}

const getIcon = (type: IconType): JSX.Element =>
  iconTypes.get(type) as JSX.Element;

const IconComponent: React.FC<IIconProps> = ({
  className,
  size,
  type,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        styles.icon,
        className,
        `${styles.size_} + ${"test"}`
      )}
      onClick={onClick}
      {...rest}
    >
      {getIcon(type)}
    </div>
  );
};

export const Icon = memo(IconComponent);
