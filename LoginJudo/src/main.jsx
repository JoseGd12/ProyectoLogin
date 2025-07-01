import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import AuthContainer from './features/auth/components/authCont'
import './shared/styles/dashBStyle.css'
import './shared/styles/loginStyle.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthContainer />
    </Provider>
  </StrictMode>,
)
