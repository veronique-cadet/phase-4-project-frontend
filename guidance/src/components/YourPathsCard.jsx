import React from 'react'

function YourPathsCard({path}) {
  return (
    <section className="transition duration-200 rounded-md bg-gray-50"><div className="px-4">
  <div className="content-center pt-10 pb-10 mb-10 ml-5 mr-5 overflow-hidden transition duration-200 bg-white border-2 border-green-500 rounded-md shadow-dashboard hover:bg-white hover:shadow-2xl">
    <div className= "">
      <table className="w-full transition duration-200 rounded-md"><tbody><tr className="bg-gray-400 whitespace-nowrap h-11 bg-opacity-80"><th className="pl-5 text-lg font-medium text-left text-white uppercase whitespace-nowrap md:text-xl -500 ">
        <p>CAREER&nbsp;</p>
        </th>
        <th className="text-lg font-medium text-center text-white uppercase whitespace-nowrap md:text-xl -500">AVG COST OF&nbsp; TUITION</th>
        <th className="text-lg font-medium text-white uppercase whitespace-nowrap md:text-xl -500 text-cente">TIME TO COMPLETE</th>
        <th className="text-lg font-medium text-center text-white uppercase whitespace-nowrap md:text-xl -500 ">AVG SALARY</th>
        <th className="text-lg font-medium text-center text-white uppercase whitespace-nowrap md:text-xl -500 ">LOAN TOTAL</th>
        <th className="text-lg font-medium text-center text-white uppercase whitespace-nowrap md:text-xl -500">EST TOTAL COST OF EDUCATION</th>
        <th className="text-lg font-medium text-center text-white uppercase whitespace-nowrap md:text-xl -500 ">BREAK EVEN</th>
        <th className="text-lg font-medium text-center text-white uppercase whitespace-nowrap md:text-xl -500">Remove</th>
        </tr>
        <tr className="border-b border-gray-100 h-18"><th className="px-4 py-2 text-left bg-white min-w-5 whitespace-nowrap">
        <div className="flex items-center -m-2">
          <div className="w-auto p-2">
            <div className="flex items-center justify-center w-10 h-10 text-base font-medium bg-green-500 rounded-md">
              <svg width="220" height="220" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 10.94C21.9896 10.8481 21.9695 10.7576 21.94 10.67V10.58C21.8919 10.4772 21.8278 10.3827 21.75 10.3L15.75 4.3C15.6673 4.22222 15.5728 4.15808 15.47 4.11H15.37C15.2728 4.058 15.1683 4.02092 15.06 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V11C22 11 22 11 22 10.94ZM16 7.41L18.59 10H17C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9V7.41ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H14V9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12H20V17ZM7 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM7 14C6.73478 14 6.48043 14.1054 6.29289 14.2929C6.10536 14.4804 6 14.7348 6 15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H7Z" fill="#EBF3FE"></path></svg></div>
          </div>
          <div className="w-auto p-2">
            <p className="text-gray-800 text-l10g md:text-xl">{path.career.name}</p>
          </div>
        </div>
        </th>
        <th className="px-4 text-lg text-center text-green-500 whitespace-nowrap md:text-xl">${path.career.avg_cost_edu}</th>
        <th className="px-4 text-lg text-center text-gray-800 whitespace-nowrap md:text-xl">{path.career.time_to_complete}&nbsp;years</th>
        <th className="px-4 text-lg text-center text-green-500 bg-white whitespace-nowrap md:text-xl">${path.career.ave_salary}</th>
        <th className="px-4 text-lg text-center text-green-500 bg-white whitespace-nowrap md:text-xl">43.5%</th>
        <th className="px-4 text-lg text-center text-green-500 bg-white whitespace-nowrap md:text-xl">$12,450.00</th>
        <th className="px-4 text-lg text-center text-gray-800 bg-white whitespace-nowrap md:text-xl">14,652</th>
        <th className="px-4 text-lg text-center text-gray-800 bg-white whitespace-nowrap md:text-xl">Delete</th>
        </tr><tr className="border-b border-gray-100 h-18"><th className="px-4 py-2 text-left bg-white whitespace-nowrap">

        </th></tr>
        </tbody></table></div>
  </div>
  </div>
</section>
  )
}

export default YourPathsCard