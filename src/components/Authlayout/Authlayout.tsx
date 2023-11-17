import { Outlet } from "react-router-dom"

export const AuthLayout=()=>{
    return <div className="h-screen p-3" style={{backgroundImage:"URL(https://maxeffect.ir/uploads/posts/2022-07/programming-codes-footage.jpg)"}}  >
        <div className="flex items-center justify-center">
            <h1 className="text-white text-3xl font-medium">Welcome to our website</h1>
        </div>
        <Outlet/>
    </div>
}