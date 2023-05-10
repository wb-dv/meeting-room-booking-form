import Fieldset from '../FieldSet/Fieldset';
import FloorSelect from '../Select/FloorSelect/FloorSelect';
import MeetingRoomSelect from '../Select/MeetingRoomSelect/MeetingRoomSelect';
import TowerSelect from '../Select/TowerSelect/TowerSelect';

import styles from './SelectsSet.module.scss';

function SelectsSet() {
  return (
    <Fieldset legend="Место">
      <TowerSelect />
      <FloorSelect />
      <MeetingRoomSelect />
    </Fieldset>
  );
}

export default SelectsSet;
