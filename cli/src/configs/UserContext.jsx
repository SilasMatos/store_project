import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export function UserProvider(props) {
  const [userData, setUserData] = useState({
    login: 'note',
    logado: 'teste',
    nome: 'teste'
  });

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};
