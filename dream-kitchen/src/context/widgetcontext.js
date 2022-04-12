import React, { createContext, useState } from "react";

const WidgetContext = createContext();

const WidgetProvider = ({ children }) => {
  const [WidgetShow, setWidgetShow] = useState(false);
  const handleClose = () => setWidgetShow(false);
  const handleShow = () => {
    setWidgetShow(true);
  };

  const data = {
    WidgetShow,
    handleShow,
    handleClose,
  };

  return (
    <WidgetContext.Provider value={data}>{children}</WidgetContext.Provider>
  );
};

export default WidgetContext;
export { WidgetProvider };
