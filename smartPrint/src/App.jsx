import Sidebar from'./Components/sidebar';
import {Routes, Route, useLocation} from 'react-router-dom';
import Print from './Pages/Print';
import PrintLog from './Pages/PrintingLog';
import FileUploader from './Pages/FileUploader';

import PrintSettingsPage from './Pages/PageSetting/PrintSettingsPage';
import PrintPropertiesPage from './Pages/Properties/PrintPropertiesPage';
import Modal from './Pages/Properties/Modal';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Pages/LogIn/LogInPage';
import Home from './Pages/Home';
function App()  {
  const location=useLocation();
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
                <Route path ="/Printpagesetting" element={<PrintSettingsPage/>}></Route>
                <Route path ="/PrintProp" element={<PrintPropertiesPage/>}></Route>
                 <Route path ="/Print/Upload" element={<Modal/>}></Route>

        </Routes>
      }
      />
    }
   
   </>
    
    
    
  )
}
export default App
