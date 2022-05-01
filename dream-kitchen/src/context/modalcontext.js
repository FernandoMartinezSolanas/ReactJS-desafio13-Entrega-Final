import React, { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [Show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  const data = {
    Show,
    handleShowModal,
    handleCloseModal,
  };

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export default ModalContext;
export { ModalProvider };
