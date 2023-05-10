import { useContext } from 'react';
import { FormContext } from '../Form/FormContext';

import styles from './CustomTimepicker.module.scss';

function CustomTimepicker({ dir }) {
  const { register } = useContext(FormContext);

  return <input type="time" {...register(`time.${dir}`)} />;
}
export default CustomTimepicker;
