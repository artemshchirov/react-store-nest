import React, { useRef, memo } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import styles from "./Overlay.module.scss";

export interface IOverlayProps {
  className?: string;
  timeout?: number;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const OverlayComponent: React.FC<IOverlayProps> = ({
  className,
  timeout = 300,
  isActive,
  onClick,
}): JSX.Element => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      className={classNames(styles.overlay, className)}
      classNames={{
        enter: styles.overlay__enter,
        enterActive: styles.overlay__enter_active,
        exit: styles.overlay__exit,
        exitActive: styles.overlay__exit_active,
      }}
      in={isActive}
      nodeRef={nodeRef}
      timeout={timeout}
      unmountOnExit
      onClick={onClick}
    >
      <div ref={nodeRef}></div>
    </CSSTransition>
  );
};

export const Overlay = memo(OverlayComponent);
