import images from 'assets/img';
import { useEffect } from 'react';

export const Main = () => {
  useEffect(() => {
    console.log(import.meta.env.VITE_APP_API_URL);
  }, []);
  return (
    <>
      <h1>Main</h1>
      <img src={images.reactLg} alt={''} />
    </>
  );
};
