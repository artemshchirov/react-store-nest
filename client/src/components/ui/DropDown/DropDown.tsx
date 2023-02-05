import React, { useRef, memo } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { TRANSITION } from "../../../utils/constants";
import styles from "./DropDown.module.scss";

export interface IDropDownProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
}

export const DropDownComponent: React.FC<IDropDownProps> = ({
  className,
  children,
  isOpen,
}) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      className={className}
      in={isOpen}
      nodeRef={nodeRef}
      timeout={TRANSITION}
      unmountOnExit
    >
      <div ref={nodeRef}>
        <div className={classNames(styles.dropdown)}>{children}</div>
      </div>
    </CSSTransition>
  );
};

// TODO DropDown.Options, DropDown.Option

export const DropDown = memo(DropDownComponent);
