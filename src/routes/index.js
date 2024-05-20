import { createBrowserRouter } from "react-router-dom";
// import Project from "../components/Home/project";
import Project2 from "../components/Home/project2";


const routes=createBrowserRouter([
    // {
    //     path: "/", 
    //     element:<Project />,
    //   },
      {
        path: "/", 
        element:<Project2 />,
      },
])

export default routes