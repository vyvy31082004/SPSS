import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrintSettingsProvider } from './Pages/PageSetting/PrintSettingContext.jsx'; // Import the provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <PrintSettingsProvider>
        <App />
      </PrintSettingsProvider>
    </StrictMode>
  </Router>
);
