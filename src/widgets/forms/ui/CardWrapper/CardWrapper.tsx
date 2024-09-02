import { ReactNode } from 'react';
import styles from './CardWrapper.module.scss';

export default function CardWrapper({ children }: { children: ReactNode }) {
  return <div className={styles.cardWrapper}>{children}</div>;
}
