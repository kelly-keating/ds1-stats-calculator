import { Link, Outlet } from 'react-router-dom'

import Vinyls from './Vinyls'

function Dash() {
  return (
    <>
      <header>
        <h1>Fruits!</h1>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/add">Add a fruit</Link>
        </nav>
      </header>

      <Outlet />

      <Vinyls />
    </>
  )
}

export default Dash
