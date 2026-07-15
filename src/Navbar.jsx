import React from 'react'

const Navbar = () => {
  return (
  <div className='text-white'>
        <header className="text-white-600 body-font bg-amber-950">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl text-white">KOPPEE</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">Service</a>
      <a className="mr-5 hover:text-gray-900">Menu</a>
      <a className="mr-5 hover:text-gray-900">Content</a>
    </nav>
    
  </div>
</header>
   {/* image area */}
   <img src="/coffee-header.jpg" alt="loading..." />
  
  </div>
  )
}

export default Navbar