import React, { createContext, useContext, useState } from 'react';

const PrintSettingsContext = createContext();

const PrintSettingsProvider = ({ children }) => {
  const [printSettings, setPrintSettings] = useState({
    selectedFile: null,
    selectedPrinter: null,
    pagesize: null,
    pageorien: null,
    colormode: null,
    printmode: null,
    pagerange: null,
    printcopies: null,
    printcollate: null,
    papersheet: null,
  });

  return (
    <PrintSettingsContext.Provider value={{ printSettings, setPrintSettings }}>
      {children}
    </PrintSettingsContext.Provider>
  );
};

const usePrintSettings = () => useContext(PrintSettingsContext);

export { PrintSettingsProvider, usePrintSettings };
export default PrintSettingsContext;
