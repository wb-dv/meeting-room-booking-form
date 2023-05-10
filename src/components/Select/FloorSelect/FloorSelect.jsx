import { FloorSelectOptions } from '../../../data/selectsOptions';

import ControlledSelect from '../ControlledSelect';

function FloorSelect() {
  return <ControlledSelect rusName="Этаж" name="floor" placeholder="Выберите этаж" options={FloorSelectOptions} />;
}

export default FloorSelect;
