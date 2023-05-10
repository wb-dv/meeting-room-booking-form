import Fieldset from '../FieldSet/Fieldset';
import TimepickersPanel from '../TimepickersPanel/TimepickersPanel';
import ControlledDatepicker from '../ControlledDatepicker/ControlledDatepicker';

import styles from './TimeSet.module.scss';

function TimeSet() {
  return (
    <Fieldset legend="Время" isFlex={true}>
      <ControlledDatepicker />
      <TimepickersPanel />
    </Fieldset>
  );
}

export default TimeSet;
