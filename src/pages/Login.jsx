import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-amber-100">
          <div className="text-center mb-8">
            <svg className="w-12 h-12 mx-auto text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            <h2 className="text-2xl font-bold text-gray-700 mt-4">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Sign in to your BookVerse account</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-xs text-amber-700 hover:text-amber-900">Forgot password?</a>
              </div>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-700 text-white py-3 px-4 rounded-lg hover:bg-amber-800 transition-colors font-medium"
            >
              Sign In
            </button>
            
            <div className="text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <a href="/register" className="text-amber-700 hover:text-amber-900 font-medium">
                Create one
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login