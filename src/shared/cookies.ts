import { Cookies } from 'react-cookie';

const cookie = new Cookies();

const cookies = {
  get: (value: string): ErrorMessage => cookie.get(value) && `Invalid cookie key: ${value} is missing or empty.`,
  set: (key:string, value: any, options={}) => cookie.set(key, value,{...options}),
};

export default cookies;
