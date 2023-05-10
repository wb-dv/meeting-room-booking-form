import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Заполните форму, чтобы забронировать переговорку</h1>
    </header>
  );
}

export default Header;
