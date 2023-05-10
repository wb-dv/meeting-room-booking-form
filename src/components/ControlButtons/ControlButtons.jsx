import ResetButton from '../Button/ResetButton/ResetButton';
import SubmitButton from '../Button/SubmitButton/SubmitButton';
import styles from './ControlButtons.module.scss';

function ControlButtons({ reset }) {
  return (
    <div className={styles.container}>
      <SubmitButton />
      <ResetButton onClick={reset} />
    </div>
  );
}

export default ControlButtons;
