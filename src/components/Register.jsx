import RegisterForm from './authentication-components/RegisterForm'
import './login.css'

const Register = () => {

    const handleGoogleLogin = async() => {
    window.open(`${import.meta.env.VITE_API_BASE_URL}/auth/google`, '_self');
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-start items-center px-2 md:px-0 overflow-y-scroll overflow-x-hidden login-bg">
      <div className="w-full h-full md:w-[40%] rounded-md md:rounded-none flex flex-col justify-center items-center p-3 my-6 md:my-0 backdrop-blur-[150px] border md:border-0 md:border-r">
        <div className="w-full h-fit flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            Register
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register
