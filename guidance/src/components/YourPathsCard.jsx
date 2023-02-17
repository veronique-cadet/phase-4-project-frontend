import React, {useState} from 'react'

function YourPathsCard({yourPaths, path, setYourPaths, id, handleDelete}) {

  const [priority, setPriority] = useState(path.priority)

  // const newArray =  setYourPaths(
  //   yourPaths.filter((path) => {
  //     return path.id !== id;
  //   }))

  
 

  const handlePriority = (newPriorityValue) => {
    const newPriority = {
      "priority": newPriorityValue
    };

    console.log(newPriorityValue)
    fetch(`http://localhost:3000/paths/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPriority),
    })
      .then((response) => response.json())
      .then(() => {
        setPriority(newPriorityValue)
        console.log("help");
      });
  };


const loanTotal = (path.loan_amt * path.interest_rate) * path.loan_term
const totalEdu = loanTotal + path.career.avg_cost_edu
const breakEven = parseFloat(totalEdu / path.career.ave_salary)

  
  return (
    <section className="transition duration-200 rounded-md bg-gray-50"><div className="px-4">
  <div className="content-center pt-10 pb-8 mb-10 ml-5 mr-5 overflow-hidden transition duration-200 bg-white border-2 border-green-500 rounded-md shadow-dashboard hover:bg-white hover:shadow-2xl">
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
        <th className="text-lg font-medium text-center text-white uppercase whitespace-nowrap md:text-xl -500 ">PRIORITY</th>
        <th className="text-lg font-medium text-center text-white uppercase whitespace-nowrap md:text-xl -500">Remove</th>
        </tr>
        <tr className="border-b border-gray-100 h-18"><th className="px-4 py-2 text-left bg-white whitespace-nowrap">
        <div className="flex items-center w-48 break-words">
          <div className="w-auto p-2">
            <div className="flex items-center justify-center w-10 h-10 text-base font-medium bg-green-500 rounded-md">
            <img src= "./career.png"/>
           </div>
          </div>
          <div className="p-2 w-35">
            <p className="text-gray-800 break-words text-l10g md:text-xl">{path.career.name}</p>
          </div>
        </div>
        </th>
        <th className="px-4 text-lg text-center text-green-500 whitespace-nowrap md:text-xl">${path.career.avg_cost_edu.toFixed(0)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</th>
        <th className="px-4 text-lg text-center text-gray-800 whitespace-nowrap md:text-xl">{path.career.time_to_complete}&nbsp;years</th>
        <th className="px-4 text-lg text-center text-green-500 bg-white whitespace-nowrap md:text-xl">${path.career.ave_salary.toFixed(0)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</th>
        <th className="px-4 text-lg text-center text-green-500 bg-white whitespace-nowrap md:text-xl">${loanTotal.toFixed(0)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</th>
        <th className="px-4 text-lg text-center text-green-500 bg-white whitespace-nowrap md:text-xl">${totalEdu.toFixed(0)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</th>
        <th className="px-4 text-lg text-center text-gray-800 bg-white whitespace-nowrap md:text-xl">{breakEven.toFixed(2)} years</th>
        <th className="px-4 text-lg text-center text-gray-800 bg-white whitespace-nowrap md:text-xl"><select name="cars" id="cars" value={priority} onChange={(e)=>handlePriority(e.target.value)} >
        
          
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option className="text-green-500" value="4">4</option>
</select></th>
        <th className="px-4 text-lg text-center text-gray-800 bg-white whitespace-nowrap md:text-xl">
          <img onClick={()=>  handleDelete(id)}
        src ="./garbage.png" className="object-contain h-10 ml-auto mr-auto w-7"/></th>
        </tr><tr className="border-b border-gray-100 h-18"><th className="px-4 py-2 text-left bg-white whitespace-nowrap">

        </th></tr>
        </tbody></table></div>
  </div>
  </div>
</section>
  )
}

export default YourPathsCard