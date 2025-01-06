
import ReactDOM from 'react-dom/client';
import { App } from './app';
import './css/styles.css';
import { ColorModeProvider } from './contexts/color-mode/color-mode-context';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ColorModeProvider>
    <CssBaseline />
    
      <App />
    
  </ColorModeProvider>
  // </React.StrictMode>
);
