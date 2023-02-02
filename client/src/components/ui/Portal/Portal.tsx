import React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

const root = document.getElementById("root");

export interface IPortalProps {
  className: string;
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements; // all HTML tags
}

export const Portal: React.FC<IPortalProps> = ({
  className,
  children,
  element: Element = "div",
}) => {
  return root
    ? ReactDOM.createPortal(
        <Element className={cn("portal")}>{children}</Element>,
        root
      )
    : null;
};
