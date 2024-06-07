import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

import { store } from './store'
import Dash from './components/Dash'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Provider store={store}>
      <ChakraProvider>
        <Dash />
      </ChakraProvider>
    </Provider>
  )
})
