import React, { useState, useEffect } from "react";
import { default as ReactModal } from "react-responsive-modal";
import classNames from "classnames";
import { Button, Icon } from "../../../components";
import "react-responsive-modal/styles.css";
import styles from "./Modal.module.scss";

export type IModalSize = "small" | "medium" | "large";

export interface IModalProps {
  className?: string;
  children?: React.ReactNode;
  size?: IModalSize;
  isOpen: boolean;
  onCloseModal: () => void;
}

export const Modal = ({
  className,
  children,
  size = "medium",
  isOpen,
  onCloseModal,
}: IModalProps): JSX.Element => {
  const defaultClassNames = {
    modal: classNames(styles.modal__default, className, {
      [styles.modal__default_size_small]: size === "small",
      [styles.modal__default_size_medium]: size === "medium",
      [styles.modal__default_size_large]: size === "large",
    }),
    closeButton: classNames(styles.modal__default_button_close),
  };

  const [style, setStyle] = useState({});

  useEffect(() => {
    if (!isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth) {
        const _styles = {
          modal: { marginRight: `${scrollbarWidth + 16}px` },
        };
        setStyle(_styles);
        document.body.classList.add("modal_open");
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    return () => {
      setStyle({});
      document.body.style.removeProperty("padding-right");
      document.body.classList.remove("modal_open");
    };
  }, [isOpen]);

  return (
    <ReactModal
      key={isOpen ? "open" : "closed"}
      classNames={defaultClassNames}
      center
      closeIcon={<Icon type="Close" />}
      styles={style}
      open={isOpen}
      onClose={onCloseModal}
    >
      <div className={styles.modal}>{children}</div>
    </ReactModal>
  );
};

export interface IModalHeaderProps {
  className?: string;
  children?: React.ReactNode;
  align?: "start" | "center" | "end";
}

Modal.Header = ({
  className,
  children,
  align,
}: IModalHeaderProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.modal__header, className, {
        [styles.modal__header_align_start]: align === "start",
        [styles.modal__header_align_center]: align === "center",
        [styles.modal__header_align_end]: align === "end",
      })}
    >
      {children}
    </div>
  );
};

export interface IModalTitleProps {
  className?: string;
  children?: React.ReactNode;
}

Modal.Title = ({ className, children }: IModalTitleProps) => {
  return (
    <h2 className={classNames(styles.modal__title, className)}>{children}</h2>
  );
};

export interface IModalContentProps {
  className?: string;
  children?: React.ReactNode;
}

Modal.Content = ({ className, children }: IModalContentProps) => {
  return (
    <div className={classNames(styles.modal__content, className)}>
      {children}
    </div>
  );
};

export interface IModalFooterProps {
  className?: string;
  buttonSubmitText?: string;
  onSubmit?: () => void;
}

Modal.Footer = ({
  className,
  buttonSubmitText = "Submit",
  onSubmit,
}: IModalFooterProps): JSX.Element => {
  return (
    <div className={classNames(styles.modal__footer, className)}>
      <Button typeButton="submit" onClick={onSubmit}>
        {buttonSubmitText}
      </Button>
    </div>
  );
};
