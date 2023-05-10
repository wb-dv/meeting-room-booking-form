import styles from './Fieldset.module.scss';

function Fieldset({ legend, children, isFlex = false }) {
  return (
    <fieldset className={`${styles.fieldset} ${isFlex ? styles.fieldset_flex : ''}`}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
}

export default Fieldset;
