import React from 'react'
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/wanburylogo.jpg" alt="Description of your image" className="w-30 h-12 p-2" />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Home</Link>
            <Link to="/products" className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Products</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Head
