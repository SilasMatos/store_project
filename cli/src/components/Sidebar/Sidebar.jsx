import React, { useState } from 'react';
import { NavLink,  Link } from 'react-router-dom';

import { AiOutlineHome, AiOutlineUser, AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';

import './Sidebar.css'

const Sidebar = () => {
  const [isReduced, setIsReduced] = useState(false);

  const toggleSidebarSize = () => {
    setIsReduced(!isReduced);
  };

  const navLinks = [
    { to: 'Acompanhamento', icon: <AiOutlineHome size={20} />, text: 'Acompanhamento' },
    { to: 'Relatorio', icon: <AiOutlineUser size={20} />, text: 'Relatorio' },
    { to: 'Pedidos', icon: <AiOutlineSetting size={20} />, text: 'Pedidos' },
    { to: 'CadastrarProdutos', icon: <AiOutlineInfoCircle size={20} />, text: 'Cadastrar Produtos' },
  ];

  return (
    <div className={`flex flex-col ${isReduced ? 'w-16' : 'w-80'} bg-white transition-all duration-300`}>
      <div className="flex items-center justify-center h-16 bg-gray-900 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">LOGO</h1>
      </div>
      <div className="flex flex-col  mt-4">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
          
            to={link.to}
            className="flex items-center text-black hover:text-gray-400 py-2 px-4"
            activeclassname="active"
          >
            {link.icon}
            {!isReduced && <span className="ml-2">{link.text}</span>}
          </NavLink>
        ))}
      </div>
      <button
        className="flex items-center justify-center h-16 bg-gray-900 border-t border-gray-700 text-white hover:text-gray-400"
        onClick={toggleSidebarSize}
      >
        {isReduced ? '>' : '<'}
      </button>
    </div>
  );
};

export default Sidebar;
