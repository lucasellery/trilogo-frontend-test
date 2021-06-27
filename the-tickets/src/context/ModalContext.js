import React, { useContext } from 'react';
import { createContext } from 'react'

export const ModalContext = createContext();

const defaultModal = {
  open: false,
  title: '',
  descriptionInput: '',
  typeInput: '',
  userInput: '',
  image: '',
  onConfirm: () => null,
  onClose: () => null
}

export default function ModalContextProvider({ children }) {
  const [modalContext, setModalProps] = React.useState(defaultModal);

  function applyConfigModal(config) {
    setModalProps(config);
  }

  return (
    <ModalContext.Provider value={{ modalContext, applyConfigModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModalContext() {
  const context = useContext(ModalContext);

  if(!context) {
    throw new Error('useModalContext must be within a SuccessModalContext');
  }

  const {modalContext, applyConfigModal} = context;
  return { modalContext, applyConfigModal };

}
