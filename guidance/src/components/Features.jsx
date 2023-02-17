import React from 'react'

function Features() {
  return (
    <div>
  <section className="py-24 bg-white md:py-28" style={{backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: 'center'}}>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4 md:w-1/3">
        <div className="h-full p-8 text-center transition duration-200 rounded-md hover:bg-white hover:shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-white bg-green-500 rounded-lg mb-7">
           <img src ="./education.png"/>
          </div>
          <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">Measure your performance</h3>
          <p className="font-medium text-coolGray-500">Stay connected with your team and make quick decisions wherever you are.</p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/3">
        <div className="h-full p-8 text-center transition duration-200 rounded-md hover:bg-white hover:shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-white bg-green-500 rounded-lg mb-7">
          <img src ="./money.png"/>
          </div>
          <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">Custom analytics</h3>
          <p className="font-medium text-coolGray-500">Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.</p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/3">
        <div className="h-full p-8 text-center transition duration-200 rounded-md hover:bg-white hover:shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-white bg-green-500 rounded-lg mb-7">
          <img src ="./career.png"/>
          </div>
          <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">Team Management</h3>
          <p className="font-medium text-coolGray-500">Our calendar lets you know what is happening with customer and projects so you</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Features