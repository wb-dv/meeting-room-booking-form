import styles from './TimepickersPanel.module.scss';
import CustomTimepicker from '../CustomTimepicker/CustomTimepicker';

function TimepickersPanel() {
  return (
    <div>
      <CustomTimepicker dir="from" />
      <CustomTimepicker dir="to" />
    </div>
  );
}

export default TimepickersPanel;
