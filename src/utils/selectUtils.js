export const getSelectValue = (val, options) => (val ? options.find((option) => option.value === val) : '');
