import { useNavigate } from 'react-router-dom';
import images from 'assets/img';

export const Main = () => {
  const navigate = useNavigate();
  const doRoute = () => {
    navigate('About');
  };
  return (
    <>
      <h1>Main</h1>
      <h1 onClick={() => doRoute()}>About</h1>
      <img src={images.reactLg} alt={''} />
    </>
  );
};
