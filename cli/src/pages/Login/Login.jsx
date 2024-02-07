import './Login.css'
import img_shopping from '../../assets/img/shopping-image.gif'

import Form from './components/Form/Form'
function Login() {
  return (
    <>
      <div className="max-h-screen  overflow-hidden main-login-container">
        <div className="h-screen flex justify-center items-center">
          <div className="bg-white p-4 flex justify-center shadow-2xl items-center gap-3  border-login rounded-3xl ">
            <div className="p-5">
              <div className=" w-full p-3 bg-white rounded-3xl ">
                <div className="flex justify-center mb-8"></div>
                <h1 className="text-2xl font-semibold text-center mt-8 mb-6">
                  Login
                </h1>
                <Form />
              </div>
            </div>
            <div>
              <img src={img_shopping} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
