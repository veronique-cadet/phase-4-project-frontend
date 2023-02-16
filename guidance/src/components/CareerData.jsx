import React from 'react'
import NavBarTwo from './NavBarTwo'
import Footer from "./Footer.jsx"
import DataTable from "./DataTable"

function CareerData() {
  return (
    <div>
      <NavBarTwo />
    <body className="antialiased bg-body text-body font-body">
    <div className="pl-40 pr-40">
                
      <section className="py-6 bg-gray-50">
        <div className="flex flex-wrap items-center justify-between px-8 pb-4 -mx-2">
          <div className="w-full px-2 mb-4 md:w-1/2 md:mb-0">
            <div className="flex flex-wrap items-end">
              <div className="w-auto mr-3">
                
              </div>
              <div className="relative w-auto pb-px bottom-px">
                
              </div>
            </div>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <div className="relative md:max-w-max md:ml-auto">
              <svg className="absolute transform -translate-y-1/2 left-3 top-1/2" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0467 11.22L12.6667 9.80667C12.3699 9.5245 11.9955 9.33754 11.5916 9.26983C11.1876 9.20211 10.7727 9.25673 10.4001 9.42667L9.80008 8.82667C10.5071 7.88194 10.83 6.70445 10.7038 5.53122C10.5775 4.358 10.0115 3.27615 9.1197 2.50347C8.22787 1.73078 7.07643 1.32464 5.89718 1.36679C4.71794 1.40894 3.59844 1.89626 2.76405 2.73065C1.92967 3.56503 1.44235 4.68453 1.4002 5.86378C1.35805 7.04302 1.76419 8.19446 2.53687 9.08629C3.30956 9.97812 4.3914 10.5441 5.56463 10.6704C6.73786 10.7966 7.91535 10.4737 8.86007 9.76667L9.45341 10.36C9.26347 10.7331 9.1954 11.1564 9.25879 11.5702C9.32218 11.984 9.51383 12.3675 9.80674 12.6667L11.2201 14.08C11.5951 14.4545 12.1034 14.6649 12.6334 14.6649C13.1634 14.6649 13.6717 14.4545 14.0467 14.08C14.2372 13.8937 14.3886 13.6713 14.4919 13.4257C14.5953 13.1802 14.6485 12.9164 14.6485 12.65C14.6485 12.3836 14.5953 12.1198 14.4919 11.8743C14.3886 11.6287 14.2372 11.4063 14.0467 11.22ZM8.39341 8.39333C7.9269 8.85866 7.33294 9.1753 6.68657 9.30323C6.0402 9.43117 5.37041 9.36466 4.76181 9.11212C4.15321 8.85958 3.63312 8.43234 3.26722 7.88436C2.90132 7.33638 2.70603 6.69224 2.70603 6.03333C2.70603 5.37442 2.90132 4.73029 3.26722 4.18231C3.63312 3.63433 4.15321 3.20708 4.76181 2.95454C5.37041 2.702 6.0402 2.6355 6.68657 2.76343C7.33294 2.89137 7.9269 3.208 8.39341 3.67333C8.70383 3.98297 8.95012 4.35081 9.11816 4.75577C9.2862 5.16074 9.3727 5.59488 9.3727 6.03333C9.3727 6.47178 9.2862 6.90592 9.11816 7.31089C8.95012 7.71586 8.70383 8.08369 8.39341 8.39333ZM13.1067 13.1067C13.0448 13.1692 12.971 13.2187 12.8898 13.2526C12.8086 13.2864 12.7214 13.3039 12.6334 13.3039C12.5454 13.3039 12.4583 13.2864 12.377 13.2526C12.2958 13.2187 12.2221 13.1692 12.1601 13.1067L10.7467 11.6933C10.6843 11.6314 10.6347 11.5576 10.6008 11.4764C10.567 11.3951 10.5495 11.308 10.5495 11.22C10.5495 11.132 10.567 11.0449 10.6008 10.9636C10.6347 10.8824 10.6843 10.8086 10.7467 10.7467C10.8087 10.6842 10.8825 10.6346 10.9637 10.6007C11.0449 10.5669 11.1321 10.5495 11.2201 10.5495C11.3081 10.5495 11.3952 10.5669 11.4765 10.6007C11.5577 10.6346 11.6314 10.6842 11.6934 10.7467L13.1067 12.16C13.1692 12.222 13.2188 12.2957 13.2527 12.3769C13.2865 12.4582 13.3039 12.5453 13.3039 12.6333C13.3039 12.7213 13.2865 12.8085 13.2527 12.8897C13.2188 12.971 13.1692 13.0447 13.1067 13.1067Z" fill="#BBC3CF"></path>
              </svg>
              <input className="w-full py-2 pl-8 pr-4 text-sm font-medium text-gray-400 border border-gray-200 rounded-lg outline-none md:w-64 focus:border-green-500 shadow-input" type="text" placeholder="Search"/>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-100"></div>
      </section>
                
      <section className="bg-gray-50">
        <div className="flex flex-wrap items-center m-2 mb-5">
          <div className="w-full p-2 md:w-1/2">
            <div className="flex flex-wrap -m-2">
              <div className="w-auto">
                <img src="flex-ui-assets/images/dashboard/pages/flex-ui-green-circle.svg" alt=""/>
              </div>
              <div className="flex-1">
                <h2 className="mb-2 text-3xl font-semibold text-black text-7xl">Music Teacher</h2>
                <p className="pb-1 text-xl text-gray-500 pd-5">K-12 music teachers lead courses in general music education, choir, instruments, and more for students in Kindergarten through 6th grade.</p>
              </div>
            </div>
          </div>
          <div className="w-full p-2 md:w-1/2">
            <div className="flex flex-wrap justify-end -m-2">
              <div className="w-full p-2 md:w-auto">
                <button className="flex flex-wrap items-center justify-center w-full px-4 py-3 text-base font-medium text-gray-500 bg-white border border-gray-200 rounded-md hover:bg-gray-100 shadow-button">
                  <a className= "hover:bg-gray-100" >Learn More </a>
                </button>
              </div>
              <div className="w-full p-2 md:w-auto">
                <button className="flex flex-wrap items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-green-500 rounded-md hover:bg-green-600 shadow-button">
                  <svg className="mr-2" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18V18ZM14 9H11V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5C9.73479 5 9.48043 5.10536 9.2929 5.29289C9.10536 5.48043 9 5.73478 9 6V9H6C5.73479 9 5.48043 9.10536 5.2929 9.29289C5.10536 9.48043 5 9.73478 5 10C5 10.2652 5.10536 10.5196 5.2929 10.7071C5.48043 10.8946 5.73479 11 6 11H9V14C9 14.2652 9.10536 14.5196 9.2929 14.7071C9.48043 14.8946 9.73479 15 10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14V11H14C14.2652 11 14.5196 10.8946 14.7071 10.7071C14.8946 10.5196 15 10.2652 15 10C15 9.73478 14.8946 9.48043 14.7071 9.29289C14.5196 9.10536 14.2652 9 14 9Z" fill="#D5DAE1"></path>
                  </svg>
                  <span>Add to Paths</span>
                </button>
              </div>
              <div className="w-full md:w-auto">
                
              </div>
            </div>
          </div>
        </div>
      </section>
                
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div className="w-full px-4 mb-4 md:w-1/2 md:mb-0">
      <h2 className="pb-3 mb-4 text-2xl font-bold leading-tight tracking-tighter text-center md:text-4xl text-darkgray-900">Education</h2>
      
      <p className="mb-4 text-base text-center">Minimum Education Required:  Bachelor's Degree</p>
      <section className="pl-20 pr-20 bg-white pt-7" style={{backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')",  backgroundPosition: "center"}}>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap pb-5 -mx-4 text-center justify-evenly">
            <div className="w-full px-4 mb-8 md:w-1/3 lg:w-1/4 lg:mb-0">
              <h2 className="mb-2 text-4xl font-bold tracking-tighter text-green-500 md:text-5xl">$18k</h2>
              <p className="text-lg font-medium text-gray-500 md:text-xl">Average Tuition Per Year</p>
            </div>
            <div className="w-full px-4 mb-8 md:w-1/3 lg:w-1/4 lg:mb-0">
              <h2 className="mb-2 text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl">4y</h2>
              <p className="text-lg font-medium text-gray-500 md:text-xl">Average time </p>
            </div>
            <div className="w-full px-4 mb-8 md:w-1/3 lg:w-1/4 lg:mb-0">
              <h2 className="mb-2 text-4xl font-bold tracking-tighter text-green-500 md:text-5xl">$48k</h2>
              <p className="text-lg font-medium text-gray-500 md:text-xl">Total Tuition</p>
            </div>
            
          </div>
        </div>
      </section>
      
      <img className="content-center ml-auto mr-auto rounded-7xl" src="images/Screen-Shot-2023-02-14-at-11-42-36-AM.png" alt=""/>
      </div>
        <div className="w-full px-4 mb-4 md:w-1/2 md:mb-0">
      <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tighter text-center md:text-4xl text-darkgray-900">Salary</h2>
      
      <p className="text-base text-center">How much do Music Teachers make?</p>
      
      <section className="py-4 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="h-full p-6 pb-0 mx-auto overflow-hidden bg-white border border-gray-100 rounded-md shadow-dashboard">
            <div className="flex flex-wrap items-center justify-between -m-2">
              <div className="w-auto p-2">
                <h2 className="text-lg font-semibold text-gray-900">Average Salary : $50,000</h2>
              </div>
              <div className="w-auto p-2">
                 <DataTable />
              </div>
            </div>
            <div className="relative">
              <div className="chart-graph7-stacked"></div>
            </div>
          </div>
        </div>
      </section>
      </div>
        <div className="w-full px-4 mb-4 md:w-1/2 md:mb-0">
      <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tighter text-center md:text-4xl text-darkgray-900">Loans</h2>
      
      <p className="mb-6 text-base text-center">We understand that loans can be a complex and daunting topic for many people. That’s why we’re here to help. Click here to learn more about loans and how we can assist you in navigating the borrowing process. </p>
      
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-800" for="">Loan Amount</label>
        <input className="w-full px-4 py-3 leading-tight text-gray-500 placeholder-gray-500 border border-gray-200 rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="number" name="field-name" placeholder="Enter Amount" id=""/>
      </div>
      
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-800" for="">Loan Term</label>
        <input className="w-full px-4 py-3 leading-tight text-gray-500 placeholder-gray-500 border border-gray-200 rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="number" name="field-name" placeholder="Enter Amount" id=""/>
      </div>
      
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-800" for="">Interest Rate</label>
        <input className="w-full px-4 py-3 leading-tight text-gray-500 placeholder-gray-500 border border-gray-200 rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="number" name="field-name" placeholder="Enter Amount" id=""/>
      </div>
      </div>
        <div className="w-full px-4 mb-4 md:w-1/2 md:mb-0">
      <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tighter text-center md:text-4xl text-darkgray-900">Summary</h2>
      
      <p className="text-base text-center">Investing $100,000 and 4 years of education to become a Nurse Technician may seem like a significant commitment, but the potential long-term financial benefits are worth considering. Based on the average total salary of $30,000 per year, you can expect to break even on your investment within approximately 3.33 years.</p>
      
      <section className="bg-white" style={{backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: "center"}}>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center pt-10 text-center -mx10-4">
            <div className="w-full px-4 mb-8 md:w-1/3 lg:w-1/4 lg:mb-0">
              <h2 className="mb-2 text-4xl font-bold tracking-tighter text-green-500 md:text-5xl">100K</h2>
              <p className="text-lg font-medium text-gray-500 md:text-xl">Total Education Cost</p>
            </div>
            <div className="w-full px-4 mb-8 md:w-1/3 lg:w-1/4 lg:mb-0">
              <h2 className="mb-2 text-4xl font-bold tracking-tighter text-green-500 md:text-5xl">50k</h2>
              <p className="text-lg font-medium text-gray-500 md:text-xl">Potential Salary</p>
            </div>
            <div className="w-full px-4 mb-8 md:w-1/3 lg:w-1/4 lg:mb-0">
              <h2 className="mb-2 text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl">2 y</h2>
              <p className="text-lg font-medium text-gray-500 md:text-lg">Amount of years you need to work to breakeven</p>
            </div>
            
          </div>
        </div>
      </section>
      </div>
      </div>
                
      <form action="#" method="post">
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div className="w-full px-4 mb-4 md:w-1/3 md:mb-0">
      <div className="mb-6">
        
        
      </div>
      </div>
        <div className="w-full px-4 mb-4 md:w-1/3 md:mb-0">
      
      </div>
        
      </div>
      </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="js/charts-demo.js"></script>
</body>
<Footer />
</div>
  )
}

export default CareerData