import { useContext } from 'react';
import { ModalContext, ModalDispatchContext } from './index'


export const Modal = () => {
  const openedModals = useContext(ModalContext);
  const { close } = useContext(ModalDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;

    const onClose = () => {
      close(Component);
    };

    const submitHandler = () => {
      if (typeof onSubmit === 'function') {
        onSubmit();
      }
      onClose();
    };
    return <Component {...restProps} key={index} onClose={onClose} onSubmit={submitHandler} />;
  });
};