import Sidebar from'./Components/sidebar';
import {Routes, Route} from 'react-router-dom';
import Print from './Pages/Print';
import PrintLog from './Pages/PrintingLog';
import FileUploader from './Pages/FileUploader';
import PrinterList from './Pages/SelectPrinter/PrinterSection';
import PrintSettingsPage from './Pages/PageSetting/PrintSettingsPage';
import PrintPropertiesPage from './Pages/Properties/PrintPropertiesPage';
import Modal from './Pages/Properties/Modal';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App()  {
  return (
    
    <Sidebar
      content = {
        <Routes >
                <Route path ="/Print" element={<Print/>}></Route>
                <Route path ="/PrintLog" element={<PrintLog/>}></Route>
                <Route path ="/Print/Upload" element={<FileUploader/>}></Route>
                <Route path="/PrintList" element={<PrinterList/>}/>
                <Route path ="/Printpagesetting" element={<PrintSettingsPage/>}></Route>
                <Route path ="/PrintProp" element={<PrintPropertiesPage/>}></Route>
                 <Route path ="/Print/Upload" element={<Modal/>}></Route>

        </Routes>
      }
    />
    
    
  )
}
export default App
