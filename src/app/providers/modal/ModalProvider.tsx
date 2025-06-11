import { ReactNode, useMemo, useState } from 'react';
import { ModalContext, ModalDispatchContext } from './ModalContext';
import { Modal } from './Modal.tsx';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<any[]>([]);

  const open = (Component: any, props: any) => {
    setModal((modals) => [...modals, { Component, props }]);
  };

  const close = (Component: any) => {
    setModal((modals) => modals.filter((m) => m.Component !== Component));
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalContext.Provider value={modal}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        {modal.length > 0 && <Modal />}
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  );
};
