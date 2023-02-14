import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import Home from './views/Home'
import stores from "./stores"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={stores}>
      <Home/>
    </Provider>,
  {/* </React.StrictMode> */}
)
