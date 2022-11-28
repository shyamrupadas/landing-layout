import React, { FC, ReactNode } from 'react';
import styles from './Background.module.scss'

type BackgroundProps = {
  children: ReactNode
}
export const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className={styles.backdrop}>
      {children}
      <div className={styles.purpleBall}></div>
      <div className={styles.redBall}></div>
      <div className={styles.smallRedBall}></div>
      <div className={styles.redLight}></div>
      <div className={styles.purpleLight}></div>
    </div>
  );
};
