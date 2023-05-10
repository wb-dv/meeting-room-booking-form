import { Controller } from 'react-hook-form';
import { useContext } from 'react';
import { FormContext } from '../Form/FormContext';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './ControlledDatepicker.scss';

function ControlledDatepicker() {
  const { control } = useContext(FormContext);

  return <Controller control={control} name="date" render={({ field: { onChange, value, name }, fieldState: { error } }) => <Calendar locale="ru-RU" name={name} onChange={(date) => onChange(date.getTime())} value={new Date(value)} minDate={new Date()} />} />;
}

export default ControlledDatepicker;
