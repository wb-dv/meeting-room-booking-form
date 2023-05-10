import styles from './ErrorMessage.module.scss';

function ErrorMessage({ message }) {
  return <div className={styles.error}>{message}</div>;
}

export default ErrorMessage;
