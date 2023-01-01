import React, { FC } from 'react';
import styles from './TemplateName.module.scss';

interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = () => {
  return (
    <div className={styles.templateName} data-testid="TemplateName">
      TemplateName
    </div>
  );
};
