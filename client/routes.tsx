import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Dash from './components/Dash'
import NewVinyl from './components/NewVinyl'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dash />}>
      <Route path="add" element={<NewVinyl />} />
    </Route>
  )
)

export default routes
