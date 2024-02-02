import { useEffect } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation
} from 'react-router-dom'

import Home from '../pages/Home/Home'
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
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default Rotas
