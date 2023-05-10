import styles from './TimepickersPanel.module.scss';
import CustomTimepicker from '../CustomTimepicker/CustomTimepicker';
import { useContext } from 'react';
import { FormContext } from '../Form/FormContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function TimepickersPanel() {
  const { errors } = useContext(FormContext);

  return (
    <div className={styles.timepickers_panel}>
      <CustomTimepicker dir="from" />
      -
      <CustomTimepicker dir="to" />
      {errors?.time && <ErrorMessage message={errors.time?.from?.message || errors.time?.to?.message} />}
    </div>
  );
}

export default TimepickersPanel;
