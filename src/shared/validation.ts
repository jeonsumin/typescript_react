
const is = {
  match: (testFn: Function, message = '') => (
    value: Value,
    fieldValues: FieldValues,
  ): ErrorMessage => !testFn(value, fieldValues) && message,

  required: () => (value: Value): ErrorMessage =>
    isNilOrEmptyString(value) && 'This field is required',

  minLength: (min: number) => (value: Value): ErrorMessage =>
    !!value && value.length < min && `Must be at least ${min} characters`,

  maxLength: (max: number) => (value: Value): ErrorMessage =>
    !!value && value.length > max && `Must be at most ${max} characters`,

  oneOf: (arr: any[]) => (value: Value): ErrorMessage =>
    !!value && !arr.includes(value) && `Must be one of: ${arr.join(', ')}`,

  notEmptyArray: () => (value: Value): ErrorMessage =>
    Array.isArray(value) && value.length === 0 && 'Please add at least one item',

  email: () => (value: Value): ErrorMessage =>
    !!value && !/.+@.+\..+/.test(value) && 'Must be a valid email',

  phone: () => (value: Value): ErrorMessage =>
    !!value && !/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(value) && 'Must be a valid phone',

  url: () => (value: Value): ErrorMessage =>
    !!value &&
    // eslint-disable-next-line no-useless-escape
    !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(value) &&
    'Must be a valid URL',
};

const isNilOrEmptyString = (value: Value): boolean =>
  value === undefined || value === null || value === '';

export default is;