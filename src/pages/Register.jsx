import React from 'react'

const Register = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-amber-100">
          <div className="text-center mb-8">
            <svg className="w-12 h-12 mx-auto text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
            <h2 className="text-2xl font-bold text-gray-700 mt-4">Create Account</h2>
            <p className="text-gray-500 mt-2">Join BookVerse to save your favorite reads</p>
          </div>
          
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="John Doe"
              />
            </div>
            
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="••••••••"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-amber-700 focus:ring-amber-500 border-amber-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-amber-700 hover:text-amber-900">Terms</a> and <a href="#" className="text-amber-700 hover:text-amber-900">Privacy Policy</a>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-700 text-white py-3 px-4 rounded-lg hover:bg-amber-800 transition-colors font-medium"
            >
              Create Account
            </button>
            
            <div className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <a href="/login" className="text-amber-700 hover:text-amber-900 font-medium">
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register