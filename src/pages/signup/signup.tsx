import { useForm } from "react-hook-form";
import { Button, Textfeild } from "../../components";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";

export const SignUp = () => {

  const signUpSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string()
      .required("email is reguired")
      .email("inter a valid email"),
    gender: Yup.string().required("gender is required"),
    phonenumber: Yup.string().required("phone number is required"),
    adress: Yup.string().required("adress is required"),
    password: Yup.string().required("password is required").min(4),
    repeadpassword: Yup.string().required("repaed password is required").min(4),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUpmForm = handleSubmit((Data) => {
    console.log(Data);

    if(Data.password !== Data.repeadpassword) return alert("password and repeadpassword is not equal")

    const getUsers = localStorage.getItem("users");
    const parsGetUsers = getUsers ? JSON.parse(getUsers) : "";
    console.log(parsGetUsers);

    if (parsGetUsers) {
      const existUser = parsGetUsers.find((user) => user.email === Data.email);
      if (existUser) return alert("email already is exist");

      const existPhoneNumber = parsGetUsers.find(
        (user) => user.phonenumber === Data.phonenumber
      );
      if (existPhoneNumber) return alert("phone number already exist");

      parsGetUsers.push(Data);
      const jsonGetUsers = JSON.stringify(parsGetUsers);
      localStorage.setItem("users", jsonGetUsers);
    } else {
      const jsonData = JSON.stringify([Data]);
      localStorage.setItem("users", jsonData);
    }
  });

  return (
    <div className="flex items-center justify-center mt-1.5">
      <form
        onSubmit={handleSignUpmForm}
        className="bg-slate-600 p-3 rounded-md w-1/3 h-96 overflow-auto"
      >
        <div className="flex items-center justify-center ">
          <h3 className="font-medium text-xl">Sign Up</h3>
        </div>
        <Textfeild
          label="Inter your name"
          placeholder="Example:Mehdi"
          helperText={errors.name?.message ?? ""}
          type="text"
          validation={register("name")}
        />

        <Textfeild
          label="Inter your gender"
          helperText={errors.gender?.message ?? ""}
          placeholder="mail or femail"
          type="text"
          validation={register("gender")}
        />

        <Textfeild
          icon="/email.svg"
          label="Inter your email"
          placeholder="Example:Mehdi@gmail.com"
          helperText={errors.email?.message ?? ""}
          type="email"
          validation={register("email")}
        />

        <Textfeild
          label="Inter your phoneNumber"
          placeholder="Example:09175465443"
          helperText={errors.phonenumber?.message ?? ""}
          type="text"
          validation={register("phonenumber")}
        />

        <Textfeild
          icon="/home.svg"
          label="Inter your adress"
          helperText={errors.adress?.message ?? ""}
          placeholder="Example:shiraz-Mehdi Abad town, Amin Street, 3rd street, on the right side of the first door"
          type="text"
          validation={register("adress")}
        />

        <Textfeild
          label="Inter your password"
          type="password"
          helperText={errors.password?.message ?? ""}
          validation={register("password")}
        />

        <Textfeild
          label="Repeat your password"
          type="password"
          helperText={errors.password?.message ?? ""}
          validation={register("repeadpassword")}
        />

        <Button children="Submit" variant="contained" />
      </form>
    </div>
  );
};
