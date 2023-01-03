import React, { FC } from "react";
import styles from "./TemplateName.module.scss";

export interface ITemplateNameProps {}

export const TemplateName: FC<ITemplateNameProps> = () => {
  return (
    <div className={styles.templateName} data-testid="TemplateName">
      TemplateName
    </div>
  );
};
