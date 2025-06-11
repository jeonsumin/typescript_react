export const ModalComponent = (props: any) => {
  const { onSubmit, onClose } = props;
  const handlerClickSubmit = () => {
    onSubmit();
  };

  const handlerClickClose = () => {
    console.log('handlerClickClose');
    onClose();
  };
  return (
    <div className='modal_wrap'>
      <h1>@@ MODAL @@</h1>
      <button onClick={handlerClickSubmit}>확인</button>
      <button onClick={handlerClickClose}>닫기</button>
    </div>
  );
};
