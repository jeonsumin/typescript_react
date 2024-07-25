import { Cookies } from 'react-cookie';

const cookie = new Cookies();
const expriation = 3600 * 12; //12시간
const now = new Date();
type CookieType = {
  key: string;
  value: any;
};
export const setCookie = (value: CookieType) => {
  let h12 = new Date(now.setTime(now.getTime() + expriation));
  return cookie.set(value.key, value.value, { path: '/', expires: h12 });
};

export const getCookie = (name: string) => {
  return cookie.get(name);
};

export const removeCookie = (name: string) => {
  return cookie.remove(name);
};

export const removeCookies = (key: any) => {
  key.map((x: string) => cookie.remove(x));
};
