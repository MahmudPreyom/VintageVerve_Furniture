
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-400 to-yellow-500">
      <div className="flex flex-col items-center justify-center text-center text-white">
        {/* Custom error illustration with rotating animation */}
        <div className="w-40 h-40 mb-8 animate-spin-slow">
          <svg
            className="w-full h-full text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12" y2="16" />
          </svg>
        </div>
        {/* Error text with floating animation */}
        <h1 className="text-5xl font-bold mb-4 animate-float">404 - Page Not Found</h1>
        <p className="text-lg">Oops! The page you are looking for does not exist.</p>
        {/* Button with pulsating animation */}
        <a
          href="/"
          className="inline-block px-6 py-3 mt-8 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
