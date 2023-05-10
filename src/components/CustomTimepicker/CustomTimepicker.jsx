import { useContext } from 'react';
import { FormContext } from '../Form/FormContext';

import styles from './CustomTimepicker.module.scss';

function CustomTimepicker({ dir }) {
  const { register, errors } = useContext(FormContext);

  return (
    <input
      className={`${styles.time_input} ${errors?.time?.[dir] ? styles.time_input_error : ''}`}
      type="time"
      {...register(`time.${dir}`, {
        required: 'Укажите время',
      })}
    />
  );
}
export default CustomTimepicker;
