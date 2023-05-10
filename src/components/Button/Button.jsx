import styles from './Button.module.scss';

function Button({ type = 'button', children, className, ...props }) {
  return (
    <button className={`${styles.button} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;
