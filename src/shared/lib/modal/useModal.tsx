import { useContext } from 'react';
import { ModalDispatchContext } from './ModalContext.ts';

export const useModals = () => {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (Component: any, props: any) => {
    open(Component, props);
  };
  const closeModal = (Component: any) => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
  };
};