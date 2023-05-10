import styles from './Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.background}>
      <section className={styles.container}>{children}</section>
    </div>
  );
}

export default Layout;
