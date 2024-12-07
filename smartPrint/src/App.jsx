import Sidebar from'./Components/sidebar';
import {Routes, Route, useLocation} from 'react-router-dom';
import Print from './Pages/Print';
import PrintLog from './Pages/PrintingLog';
import FileUploader from './Pages/FileUploader';
import PrinterList from './Pages/SelectPrinter/PrinterSection';
import PrintSettingsPage from './Pages/PageSetting/PrintSettingsPage';
import PrintPropertiesPage from './Pages/Properties/PrintPropertiesPage';
import Modal from './Pages/Properties/Modal';
import PrintJob from './Pages/PrintJob';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Pages/LogIn/LogInPage';
import Home from './Pages/Homepage/Home';
function App()  {
  const location=useLocation();
  const samplePrintSettings = {
    colormode: "Có màu",
    pageorien: "Chiều ngang",
    pagerange: "all",
    pagesize: "A3",
    papersheet: "One",
    printcollate: "collate",
    printcopies: 1,
    printmode: "Một mặt",
    selectedFile: null,
    selectedPrinter: "6753212f4adf9c0ec2c46141",
    selectedPrinterID: "P01",
    selectedPrinterName: "Máy in A",
  };
  const temp=location.pathname==="/"
  return (
    <>
    {
      temp?
      <Routes>
              <Route path ="/" element={<LoginPage/>}></Route>
      </Routes>
      :
      <Sidebar
      content = {
        <Routes >
                
                <Route path ="/Print" element={<Print/>}></Route>
                <Route path ="/PrintLog" element={<PrintLog/>}></Route>
                <Route path ="/Print/Upload" element={<FileUploader/>}></Route>
                <Route path ="/Home" element={<Home/>}></Route>
                <Route path="/PrintList" element={<PrinterList/>}/>
                <Route path ="/Printpagesetting" element={<PrintSettingsPage/>}></Route>
                <Route path ="/PrintJob" element={<PrintJob/>}></Route>
                 <Route path ="/Print/Upload" element={<Modal/>}></Route>

        </Routes>
      }
      />
    }
   
   </>
    
    
    
  )
}
export default App
