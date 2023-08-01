import { RotatingLines } from 'react-loader-spinner';

import styles from './Loader.module.scss';

interface LoaderProps {
  basic?: boolean;
}

function Loader({ basic }: LoaderProps) {
  if (basic) {
    return (
      <div className={styles.basicWrapper}>
        <RotatingLines
          animationDuration="0.75"
          strokeColor="grey"
          strokeWidth="5"
          visible
          width="30"
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.basicWrapper}>
        <RotatingLines
          animationDuration="0.75"
          strokeColor="grey"
          strokeWidth="5"
          visible
          width="30"
        />
      </div>
    </div>
  );
}

export default Loader;
