import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const PrintSettingsContext = createContext();

const PrintSettingsProvider = ({ children }) => {
  const [printSettings, setPrintSettings] = useState({
    selectedFile: null,
    selectedPrinter: null,
    selectedPrinterName:null,
    pagesize: null,
    pageorien: null,
    colormode: null,
    printmode: null,
    pagerange: null,
    printcopies: null,
    printcollate: null,
    papersheet: null,
    totalpage: null,
  });

  // Lưu dữ liệu vào localStorage khi có sự thay đổi trong printSettings
  useEffect(() => {
    localStorage.setItem('printSettings', JSON.stringify(printSettings));
  }, [printSettings]);

  // Hàm tải dữ liệu từ localStorage vào state khi ứng dụng khởi động
  useEffect(() => {
    const savedSettings = localStorage.getItem('printSettings');
    if (savedSettings) {
      setPrintSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Hàm gửi dữ liệu lên server và lưu vào MongoDB
  const savePrintSettings = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/print-settings", printSettings);
      console.log("Settings saved:", response.data);
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  return (
    <PrintSettingsContext.Provider value={{ printSettings, setPrintSettings, savePrintSettings }}>
      {children}
    </PrintSettingsContext.Provider>
  );
};

const usePrintSettings = () => useContext(PrintSettingsContext);

export { PrintSettingsProvider, usePrintSettings };
export default PrintSettingsContext;
