import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthLayout, Layout } from "./components"
import { HomePage, SignIn, SignUp } from "./pages"


export const App=()=>{

  const router= createBrowserRouter([
    {
      path:"/auth",
      element: <AuthLayout />,
      children:[
        {
          path:"/auth/signup",
          element:<SignUp/>
        },
        {
          path:"/auth/signin",
          element:<SignIn/>
        }
      ]
      
    },
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
      ]
      
    }
  ])

  return <RouterProvider router={router}/>
}