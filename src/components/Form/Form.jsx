import Header from '../Header/Header';
import Fields from '../Fields/Fields';

import { FormContext } from './FormContext';

import styles from './Form.module.scss';

import { useForm } from 'react-hook-form';
import ControlButtons from '../ControlButtons/ControlButtons';

const Form = () => {
  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      tower: '',
      floor: '',
      room: '',
      date: Date.now(),
      comment: '',
      time: {
        from: '',
        to: '',
      },
    },
  });

  const logData = (data) => {
    // console.log(JSON.stringify(data));
    console.log(data);
    reset();
  };

  return (
    <FormContext.Provider value={{ control, register, errors }}>
      <form onSubmit={handleSubmit(logData)} className={styles.form}>
        <Header />
        <Fields />
        <ControlButtons reset={reset} />
      </form>
    </FormContext.Provider>
  );
};

export default Form;
