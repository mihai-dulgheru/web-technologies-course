import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './stores/store'

import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css' // icons
import 'primeflex/primeflex.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
