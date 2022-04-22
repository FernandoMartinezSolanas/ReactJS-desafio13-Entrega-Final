import React, { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [Show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = {
    Show,
    handleShow,
    handleClose,
  };

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export default ModalContext;
export { ModalProvider };
