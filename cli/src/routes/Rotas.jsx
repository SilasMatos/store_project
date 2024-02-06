import { useEffect } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Navigate
} from 'react-router-dom'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import NotFound from '../pages/NotFound/NotFound'
import MyAccount from '../pages/MyAccount/MyAccount'
import Historic from '../pages/MyAccount/Historic/Historic'
import Extract from '../pages/MyAccount/Extract/Extract'

// import { UserContext } from '../configs/UserContext'
//import { useContext } from 'react'

function ToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const Rotas = () => {
  // const [userData, setUserData] = useContext(UserContext)

  return (
    <Router>
      <ToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Inicio" element={<Home />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="MinhaConta" element={<MyAccount />}>
          <Route path="Historico" element={<Historic />} />
          <Route path="Extrato" element={<Extract />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default Rotas
