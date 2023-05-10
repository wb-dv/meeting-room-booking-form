import './ControlledSelect.scss';

import Select, { components } from 'react-select';
import { Controller } from 'react-hook-form';

import { getSelectValue } from '../../utils/selectUtils';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { useContext } from 'react';
import { FormContext } from '../Form/FormContext';

function ControlledSelect({ rusName, name, placeholder, options }) {
  const CustomControl = ({ children, ...props }) => {
    return (
      <components.Control {...props}>
        <div className="static_text">{rusName + ': '}</div>
        {children}
      </components.Control>
    );
  };

  const { control } = useContext(FormContext);

  return (
    <Controller
      rules={{
        required: `${rusName} - обязательное поле`,
      }}
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className={`controlled-select__wrapper ${error ? 'controlled-select_error' : ''}`}>
          <Select
            classNamePrefix="controlled-select"
            placeholder={placeholder}
            options={options}
            onChange={(data) => onChange(data.value)}
            value={getSelectValue(value, options)}
            components={{
              Control: CustomControl,
            }}
          />
          {error && <ErrorMessage message={error.message} />}
        </div>
      )}
    />
  );
}

export default ControlledSelect;
