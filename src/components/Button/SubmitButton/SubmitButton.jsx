import Button from '../Button';
import styles from '../Button.module.scss';

function SubmitButton() {
  return (
    <Button className={styles.button_primary} type="submit">
      Отправить
    </Button>
  );
}

export default SubmitButton;
