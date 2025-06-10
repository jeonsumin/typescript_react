import { useEffect, useState } from 'react';
import { images } from 'assets';
import { ApiService } from 'shared/ApiService';
import { useAxios } from 'hook/useAxios';

export const Main = () => {
  const [title, setTitle] = useState(null);
  const api = new ApiService('https://jsonplaceholder.typicode.com');
  const { loading, error, callback } = useAxios({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    onSuccess: (res) => {
      setTitle(res.title);
    },
  });

  // const {loading, callback } = useAxios({
  //   url: 'https://jsonplaceholder.typicode.com/posts',
  //   method: 'POST',
  //   onSuccess: (data) => {
  //     alert(`작성 완료: ID ${data.id}`);
  //   },
  // })

  const postMessage = async () => {
    //   callback({
    //     title:"제목",
    //     body:"내용",
    //     userId:11,
    //   })
    // await api.request(
    //   { method: 'GET', url: '/posts/1' },
    //   (data) => {
    //     setTitle(data.title);
    //     setLoading(false);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
    // const response = await api.get('/posts/1');
    // setTitle(response.title);
  };

  if (loading) return <h1>loading</h1>;

  return (
    <>
      <h1>Main</h1>
      <img src={images.reactLg} alt={''} />
      <button onClick={() => callback()}> fetch Data</button>
      {/*<button onClick={postMessage}> POST Data</button>*/}
      {title}
    </>
  );
};
