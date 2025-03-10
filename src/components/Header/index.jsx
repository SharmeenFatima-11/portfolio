import React from 'react'
import Heading from '../Heading'

const index = () => {
  return (
    <header className="bg-blue py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
      {/* Logo or Name */}
      <Heading text="Transforming Ideas into Interactive Web Applications" level="1" />
      

      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default index