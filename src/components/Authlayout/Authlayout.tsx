import { Outlet } from "react-router-dom";
import { Header } from "..";
import web from "/image/img2jpg.jpg"

export const AuthLayout = () => {
  return (
    <>
      <Header />
      <div
        className=" p-3 object-cover fixed w-full"
        style={{
          
          height: "1000px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden",
          backgroundImage:
            `url(${web})`,
        }}
      >
        <div className="flex items-center justify-center">
          <h1 className="text-white text-3xl font-medium">
            Welcome to our website
          </h1>
        </div>
        <Outlet />
      </div>
    </>
  );
};
