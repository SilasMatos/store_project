import './Login.css'
import { useState } from 'react'
import Form from './components/Form/Form'
function Login() {
  return (
    <>
      <div className="max-h-screen h-screen overflow-hidden main-login-container flex justify-center items-center ">
        <div className="bg-white p-4 flex justify-center items-center gap-3 rounded-lg">
          <div className="p-5">
            <div>LOGO</div>
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center mb-8"></div>
              <h1 className="text-2xl font-semibold text-center mt-8 mb-6">
                Login
              </h1>
              <Form />
            </div>
          </div>
          <div>s</div>
        </div>
      </div>
    </>
  )
}

export default Login
