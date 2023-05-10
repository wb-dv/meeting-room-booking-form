import { useContext } from 'react';
import { FormContext } from '../Form/FormContext';

import styles from './CustomTextarea.module.scss';

function CustomTextarea() {
  const { register } = useContext(FormContext);

  return <textarea placeholder="Оставьте комментарий к брони" className={styles.textarea} {...register('comment')} />;
}

export default CustomTextarea;
