import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider} from '@mui/material/styles';
import {store} from './redux/store.jsx'
import theme from './theme.js'
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
       </Provider>
    </ThemeProvider>
   
  </React.StrictMode>,
)
