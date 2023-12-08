/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { GetUsers } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Header } from "../../components";

export const HomePage = () => {

  const getUsers = localStorage.getItem("users");
  const parseGetUsers = getUsers ? JSON.parse(getUsers) : "";

  const emailSchema = Yup.object({
    email: Yup.string().email("inter a valid email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });

  const handleRemoveUser = handleSubmit((Data) => {
    if (!Data.email) return alert("Enter the user's email");
    

    const getUsers = localStorage.getItem("users");
    const parseGrtUsers = getUsers ? JSON.parse(getUsers) : "";

    if (!parseGrtUsers) return alert("user is not exist");

    const existUser = parseGrtUsers.find((user) => user.email !== Data.email);
    if (existUser) return alert("user is not exist");

    const deleteUser = parseGrtUsers.filter(
      (user) => user.email !== Data.email
    );

    const jsoneDeleteUser = deleteUser ? JSON.stringify(deleteUser) : "";

    localStorage.setItem("users", jsoneDeleteUser);
  });

  return (
    <>
      <Header />
      <h1 className="ps-1 mb-2 text-3xl font-medium">
        List of users who use the site:
      </h1>
      <div className="flex gap-5">
        <div className="w-1/2 h-96 bg-gray-400 rounded-md px-3 py-1  overflow-auto">
          <div className=" flex flex-col gap-2">
            {(parseGetUsers)
              ? parseGetUsers?.map((user: any) => {
                  return (
                    <div className="p-1 border-2 border-white rounded-md flex justify-between">
                      <ul className="flex flex-col ">
                        <li>
                          <h5>{"Name: " + user?.name}</h5>
                          <p>{"Gender: " + user?.gender}</p>
                          <p>{"Phone Number: " + user?.phonenumber}</p>
                          <mark>{"Email: " + user?.email}</mark>
                          <p>{"Adress: " + user?.adress}</p>
                        </li>
                      </ul>
                    </div>
                  );
                })
              : "User has not registered yet!!!"}
          </div>
        </div>

        <div className="flex flex-col gap-1 ">
          <p className="text-md">Enter the email to delete the user</p>
          <div className="flex w-fit bg-slate-300 rounded-md overflow-hidden text-sm">
            <input
              {...register("email")}
              placeholder="example:mahdi@gmail.com"
              className="bg-transparent  outline-none p-1 border-none"
              type="email"
            />
            <button
              onClick={handleRemoveUser}
              className="text-sm p-1 bg-blue-800 "
            >
              Delete
            </button>
          </div>
          <p className="text-red-400">{<>{errors.email?.message ?? ""}</>}</p>
        </div>
      </div>

      <GetUsers />
    </>
  );
};
