import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
// import useAuth from "../hooks/useAuth";



const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  // const { createUser, user } = useAuth();
  const { createUser, user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    console.log(email, password, confirm_password);

    if (password === confirm_password) {
      createUser(email, password);
      if (user) {
        navigate(from);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Create an account</h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Or{' '}
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              sign in to your account
            </a>
          </p>
        </div>
        <form onSubmit={handleSUbmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="retype-password" className="sr-only">
                Retype Password
              </label>
              <input
                name="confirm_password"
                type="password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Retype Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              value="Register"
            >Register
            </button>
          </div>
        </form>
        <div>
          {!passMatch && (
            <div className="my-2">
              <p className="text-red-500">Passwords do not match!</p>
            </div>
          )}
        </div>
        <div className="mt-6">
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="currentColor"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c3.4 0 6.1 1.2 8.1 3.1l6.2-6.2C34.9 3.6 30.2 1.5 24 1.5 14.4 1.5 6.7 7.8 4.2 16.6l7.2 5.6C12.6 15.3 17.7 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.1 24.6c0-1.6-.1-3.1-.4-4.5H24v9.4h12.5c-.5 3.1-2 5.6-4.1 7.3l6.2 4.8C42.5 37.5 46 31.6 46 24.6z"
              />
              <path
                fill="#FBBC05"
                d="M7.3 28.2c-.7-2.1-1.2-4.3-1.2-6.7s.4-4.6 1.2-6.7l-7.2-5.6C-.3 12.8-1 16.3-1 19.9s.6 7 1.7 10l7.1-5.7z"
              />
              <path
                fill="#EA4335"
                d="M24 46c6.3 0 11.6-2.1 15.5-5.8l-6.9-5.4c-1.9 1.4-4.3 2.4-6.8 2.4-5.7 0-10.6-3.8-12.3-9l-7.2 5.6C10.2 41.6 16.5 46 24 46z"
              />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
