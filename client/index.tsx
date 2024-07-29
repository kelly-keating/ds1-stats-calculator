import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider } from '@chakra-ui/react'

import { store } from './store'
import Dash from './components/Dash'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
    domain="dev-kelly.au.auth0.com"
    clientId="yzLfukybesgW1mQmfElOffS7b9GcyRZd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <ChakraProvider>
        <Dash />
      </ChakraProvider>
    </Provider>
  </Auth0Provider>
  )
})
