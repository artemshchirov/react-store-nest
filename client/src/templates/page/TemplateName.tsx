import React, { FC } from 'react';
import styles from './TemplateName.module.scss';

interface TemplateName {}

export const TemplateName: FC<TemplateName> = () => (
  <div className={styles.templateName} data-testid="TemplateName">
    TemplateName
  </div>
);
