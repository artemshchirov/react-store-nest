import React from "react";
import styles from "./TemplateName.module.scss";

export interface ITemplateNameProps {}

export const TemplateName: React.FC<ITemplateNameProps> = ({}) => {
  return (
    <div className={styles.templateName}>
      TemplateName
    </div>
  );
};
