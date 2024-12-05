import React, { createContext, useContext, useState } from "react";

const PrintSettingsContext = createContext();

const PrintSettingsProvider = ({ children }) => {
  const [printSettings, setPrintSettings] = useState({
    selectedFile: null, // File được chọn
    selectedPrinter: null, // Máy in được chọn
    pagesize: null,
    pageorien: null,
    colormode: null,
    printmode: null,
    pagerange: null,
    printcopies: null,
    printcollate: null,
    papersheet: null,
  });

  // Hàm cập nhật file được chọn
  const updateSelectedFile = (file) => {
    if (!file) {
      console.error("Invalid file selected.");
      return;
    }

    setPrintSettings((prevSettings) => ({
      ...prevSettings,
      selectedFile: {
        name: file.name,
        size: file.size,
        type: file.type,
      },
    }));
  };

  // Hàm cập nhật máy in được chọn
  const updateSelectedPrinter = (printer) => {
    if (!printer || !printer.name) {
      console.error("Invalid printer selected.");
      return;
    }

    setPrintSettings((prevSettings) => ({
      ...prevSettings,
      selectedPrinter: {
        name: printer.name,
        status: printer.status,
        location: printer.location,
      },
    }));
  };

  return (
    <PrintSettingsContext.Provider
      value={{
        printSettings,
        setPrintSettings,
        updateSelectedFile,
        updateSelectedPrinter,
      }}
    >
      {children}
    </PrintSettingsContext.Provider>
  );
};

// Hook tùy chỉnh để sử dụng PrintSettingsContext
const usePrintSettings = () => useContext(PrintSettingsContext);



export { PrintSettingsProvider, usePrintSettings };
export default PrintSettingsContext;
