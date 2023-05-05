import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
   </Provider>
  </React.StrictMode>,
)
