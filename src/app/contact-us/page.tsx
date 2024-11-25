import React from 'react'


    const ContactUs = () => {
        return (
          <div>
             
      
          <div className="container-contact max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-serif font-semibold text-center mb-8 f">DON'T HESITATE TO CONTACT </h2>
          <form action="" className="space-y-6">
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                  />
              </div>
              <div className="form-group">
                  <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-yellow-500"
                  />
              </div>
              <div className="form-group">
                  <textarea
                      cols={2}
                      rows={5}
                      placeholder="Enter your message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-yellow-500"
                  ></textarea>
              </div>
              <div className="form-group">
                  <input
                      id="btn"
                      type="submit"
                      value="Send"
                      className="w-28  py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
              </div>
          </form>
      </div>
      
      </div>
      
        )
      }
      
      export default ContactUs
      
 

