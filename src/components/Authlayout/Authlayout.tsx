import { Outlet } from "react-router-dom";
import { Header } from "..";

export const AuthLayout = () => {
  return (
    <>
      <Header />
      <div
        className=" p-3 object-cover"
        style={{
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden",
          backgroundImage:
            "url(https://bahalmag.ir/wp-content/uploads/2020/02/photo-1550645612-83f5d594b671.jpg)",
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
