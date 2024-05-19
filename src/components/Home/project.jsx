import { useState } from "react";

const Project = () => {
 


  const[tocolor,setcolor]=useState("")
  const colorRed="#FF0000"
  const blue="#0000FF"
  const green="#008000"

  function chnagered(){
    console.log("Red")
    setcolor(colorRed)
  }
 
  function chnageGreen(){
    console.log("Green")
    setcolor(green)
  }
   
   function changeBlue(){
    console.log("Blue")
    setcolor(blue)
   }
    
    
   
  
  return (
    <div className="w-[100%] h-96" style={{backgroundColor:`${tocolor}`}}>

    <div className="flex  gap-3 justify-center items-center w-full h-1/2 bg-inherit "  >
       <div className="">

    <button className="bg-red-500" >
            
        </button>
        <button type="button" onClick={chnagered} className="text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 ">Red</button>

        <button className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600  " onClick={chnageGreen}>
            Green
        </button>
        <button  className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600  " onClick={changeBlue}>
            Blue
        </button>
       </div>
  
    </div>
    </div>
  )
}

export default Project