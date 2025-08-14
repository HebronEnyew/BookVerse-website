import React from 'react'

const Footer = () => {
  return (
<footer className="bg-[#fefcf8] text-[#7c7c7c] border-t border-[#b45309] py-8 mt-12">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
    
    <div className="text-center md:text-left">
      <h1 className="text-2xl font-bold tracking-tight">
        VALERIE<span className="text-[#b45309]">READS</span>
      </h1>
      <p className="text-sm mt-1">&copy; {new Date().getFullYear()} VALERIEREADS. All rights reserved.</p>
    </div>


    <div className="flex space-x-6">
      <a href="#" className="hover:text-[#b45309] transition-colors">Home</a>
      <a href="#" className="hover:text-[#b45309] transition-colors">Browse</a>
      <a href="#" className="hover:text-[#b45309] transition-colors">Favorites</a>
    </div>

    <div className="flex space-x-4">
      <a href="https://github.com/HebronEnyew" target="_blank" rel="noopener noreferrer" className="hover:text-[#b45309]">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.32 3.54 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.8c1.02.01 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.67 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b45309]">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 20-5 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/hebron-enyew-7a0944378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="hover:text-[#b45309]">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.25 2.3-2.2 4.23-2.2 4.53 0 5.37 2.97 5.37 6.83V24h-5v-7.4c0-1.77-.03-4.05-2.46-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8z"/>
        </svg>
      </a>
    </div>
    
  </div>
</footer>


  )
}

export default Footer