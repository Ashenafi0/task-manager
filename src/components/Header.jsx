const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <svg 
              className="w-8 h-8 text-blue-500 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span className="text-xl font-bold text-gray-800">TaskMaster</span>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 