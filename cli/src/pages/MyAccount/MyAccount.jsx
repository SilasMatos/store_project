import NavBar from '../../components/Navbar/Navbar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

function MyAccount() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="mte container ">
        <div className='mt-4'>
          <h1 className="text-2xl">Minha Conta</h1>
          <p className="text-sm font-semibold text-gray-400">
            Explore as opções disponíveis para acessar extratos de ganhos de
            pontos, revisar transações passadas e visualizar detalhes essenciais
            da sua conta.
          </p>
        </div>
        <div className="mt-4">
          <Box className="" sx={{ width: '100%' }}>
            <Tabs
              onChange={handleChange}
              value={value}
              aria-label="Tabs where selection follows focus"
              selectionFollowsFocus
            >
              <Tab label={<Link to="Historico">Historico</Link>} />

              <Tab label={<Link to="Extrato">Extrato</Link>} />
            </Tabs>
          </Box>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MyAccount
