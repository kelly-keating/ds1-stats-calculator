import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { ChakraProvider } from '@chakra-ui/react'

import { store } from './store'
import routes from './routes'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={routes} />
      </ChakraProvider>
    </Provider>
  )
})
