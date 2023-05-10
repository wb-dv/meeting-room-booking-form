import { TowerSelectOptions } from '../../../data/selectsOptions';
import ControlledSelect from '../ControlledSelect';

function TowerSelect() {
  return <ControlledSelect rusName="Башня" name="tower" placeholder="Выберите башню" options={TowerSelectOptions} />;
}

export default TowerSelect;
