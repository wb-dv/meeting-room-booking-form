import SelectsSet from '../SelectsSet/SelectsSet';
import TimeSet from '../TimeSet/TimeSet';
import styles from './Fields.module.scss';

function Fields() {
  return (
    <div className={styles.fields}>
      <SelectsSet />
      <TimeSet />
    </div>
  );
}

export default Fields;
