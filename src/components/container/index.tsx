import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface IContainerProps {
  children: ReactNode | ReactNode[];
  fluid?: boolean;
}

const Container: FC<IContainerProps> = ({ children, fluid = false }) => {
  return (
    <div className={fluid ? styles.containerFluid : styles.container}>
      {children}
    </div>
  );
};

export default Container;
