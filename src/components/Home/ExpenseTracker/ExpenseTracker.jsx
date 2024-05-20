

const Project2 = () => {

   function sumit(e){
       e.preventDefault();
    console.log("jej",e.target[0].value)
   }


  return (
    <div>
    
<form onSubmit={sumit} >
    <div className=" mb-6 ">
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            
            <input name="description"  type="text" id="first_name" className="bg-gray-50 border className text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-black" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input name="lastname" type="text" id="last_name" className="bg-gray-50 border className text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-black" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
            <input name="company" type="text" id="company" className="bg-gray-50 border className text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-black" 
              required />
        </div>  
     
    </div>
    <button   type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
  )
}

export default Project2