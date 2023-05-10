import SubmitButton from '../Button/SubmitButton/SubmitButton';
import ResetButton from '../Button/ResetButton/ResetButton';
import Header from '../Header/Header';
import Fields from '../Fields/Fields';

import { FormContext } from './FormContext';

import styles from './Form.module.scss';

import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import ControlButtons from '../ControlButtons/ControlButtons';

const Form = () => {
  const { handleSubmit, reset, control, register } = useForm({
    mode: 'onBlur',
    defaultValues: {
      tower: '',
      floor: '',
      room: '',
      date: Date.now(),
      time: {
        from: '',
        to: '',
      },
    },
  });

  const savedReset = useCallback(reset, [reset]);

  const logData = (data) => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <FormContext.Provider value={{ control, register }}>
      <form onSubmit={handleSubmit(logData)} className={styles.form}>
        <Header />
        <Fields />
        <ControlButtons reset={savedReset} />
      </form>
    </FormContext.Provider>
  );
};

export default Form;
