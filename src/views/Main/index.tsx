import axios from '../../plugins/axios';
import { useEffect } from 'react';

export default function Main() {
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1.0/member').then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <>
      <h1>Main</h1>
    </>
  );
}
