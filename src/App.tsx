import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthLayout } from "./components"
import { SignUp } from "./pages"


export const App=()=>{

  const router= createBrowserRouter([
    {
      path:"/auth",
      element: <AuthLayout />,
      children:[
        {
          path:"/auth/signup",
          element:<SignUp/>
        }
      ]
      
    }
  ])

  return <RouterProvider router={router}/>
}