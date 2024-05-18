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
    <div className="w-full " style={{backgroundColor:`${tocolor}`}}>

    <div className="flex  gap-3 justify-center items-center w-full h-1/2 bg-inherit "  >
       <div className="">

    <button className="bg-red-500" onClick={chnagered}>
            Red
        </button>

        <button className="bg-green-500 text-white p-2" onClick={chnageGreen}>
            Green
        </button>
        <button className="bg-blue-500 text-white p-2"  onClick={changeBlue}>
            Blue
        </button>
       </div>
  
    </div>
    </div>
  )
}

export default Project