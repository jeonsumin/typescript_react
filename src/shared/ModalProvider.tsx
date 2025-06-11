import { createContext, ReactNode, useMemo, useState } from 'react';
import { Modal } from './Modal';

type ModalContextOption = {
  openModal: () => void;
  closeModal: () => void;

  openAlert: () => void;
  closeAlert: () => void;
};

export const ModalDispatchContext = createContext<any>({
  open: () => {},
  close: () => {},
});

export const ModalContext = createContext<any[]>([]);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<any[]>([]);

  const open = (Component: any, props: any) => {
    setModal((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: any) => {
    setModal((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalContext.Provider value={modal}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        { modal && <Modal /> }
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  );
};
