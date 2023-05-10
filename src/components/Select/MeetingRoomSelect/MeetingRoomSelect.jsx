import { MeetingRoomSelectOptions } from '../../../data/selectsOptions';
import ControlledSelect from '../ControlledSelect';

function MeetingRoomSelect() {
  return <ControlledSelect rusName="Переговорка" name="room" placeholder="Выберите переговорку" options={MeetingRoomSelectOptions} />;
}

export default MeetingRoomSelect;
