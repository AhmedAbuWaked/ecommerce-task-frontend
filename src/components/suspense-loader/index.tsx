import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Spin } from 'antd';
import styles from './index.module.scss';

const SuspenseLoader = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);
  return (
    <div className={styles.suspenseLoaderWrap}>
      <Spin size='large' />
    </div>
  );
};

export default SuspenseLoader;
