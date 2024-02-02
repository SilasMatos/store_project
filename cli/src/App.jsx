import Rotas from './routes/Rotas'
import { UserProvider } from './configs/UserContext'

function App() {
  return (
    <>
      <UserProvider>
        <Rotas />
      </UserProvider>
    </>
  )
}

export default App