import { useForm } from "react-hook-form";
import { Button, Textfeild } from "./../../components";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";

export const SignIn = () => {
  const signInSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("inter a valid email"),
    password: Yup.string().required("password is required").min(4),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const handleSignInForm = handleSubmit((Data) => {
    console.log(Data);

    const getUsers = localStorage.getItem("users");
    const parsGetUser = getUsers ? JSON.parse(getUsers) : null;

    const existUser = parsGetUser.find(
      (user: typeof Data) =>
        user.email === Data.email && user.password === Data.password
    );

    if (existUser) {
      location.assign("/");
    } else {
      return alert("user is not exist");
    }
  });

  return (
    <div className="flex items-center justify-center mt-2">
      <form
        onSubmit={handleSignInForm}
        className="bg-slate-600 p-3 rounded-md w-1/3 h-96 overflow-auto"
      >
        <div className="flex items-center justify-center ">
          <h3 className="font-medium text-xl text-white">Sign In</h3>
        </div>

        <Textfeild
          placeholder="Example:mahdi@gmail.com"
          label="inter your email adress!!"
          helperText={errors.email?.message ?? ""}
          icon="./email.svg"
          validation={register("email")}
        />
        <Textfeild
          type="password"
          label="inter your password"
          validation={register("password")}
          helperText={errors.password?.message ?? ""}
        />

        <Button variant="contained" className="mt-4" children="Sign In" />
      </form>
    </div>
  );
};
