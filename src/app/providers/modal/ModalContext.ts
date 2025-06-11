import { createContext } from 'react';

export const ModalDispatchContext = createContext<any>({
  open: () => {},
  close: () => {},
})

export const ModalContext = createContext<any[]>([])
