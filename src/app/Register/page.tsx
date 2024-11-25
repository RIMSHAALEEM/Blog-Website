import React from 'react'


    const Register = () => {
        return (
          <div>
             
      
          <div className="container-contact max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-serif font-semibold text-center mb-8">Register</h2>
          <form action="" className="space-y-6">
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                  />
              </div>
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                  />
              </div>
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Enter your email-id"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                  />
              </div>
              <div className="form-group">
                  <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-yellow-500"
                  />
              </div>
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Confirm your password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                  />
              </div>
             
              <div className="form-group flex ">
              <a className="w-28 mr-8 py-3 pl-8 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500" href="SignIn">SignIn</a>
             

                  <a className="w-28  py-3 pl-6 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500" href="Register">Register</a>
              </div>

              

          </form>
      </div>
      
      </div>
      
        )
      }
      
      export default Register
      
 

