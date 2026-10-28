// import NavBar from "../component/navBar";
import NavBar from "../component/navBar";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { UseAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

const inputClass =
  "rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-amber-400";
const labelClass = "text-sm font-medium text-slate-700";
const buttonClass =
  "rounded-lg bg-slate-900 px-6 py-3 font-semibold text-amber-400 hover:bg-slate-800";

export default function LoginPage() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <NavBar />
      <div className="flex justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-center text-3xl font-bold text-slate-900">
            {login ? "Login" : "Register"}{" "}
            <span className="text-amber-500">Here</span>
          </h1>

          {login ? <Login /> : <Register />}

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setLogin(true)}
              className="text-sm font-semibold text-amber-500 hover:underline"
            >
              Login
            </button>
            <button
              onClick={() => setLogin(false)}
              className="text-sm font-semibold text-amber-500 hover:underline"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login() {
  const { login } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const result = login(data.email, data.password);
    if (!result.success) {
      alert(result.message);
      return;
    }
    navigate("/");
  };
  return (
    <div>
      <form
        className="mt-8 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className={inputClass}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className={labelClass}>Password</label>
          <input
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            placeholder="Password"
            className={inputClass}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <button className={buttonClass}>Login</button>
      </form>
    </div>
  );
}

function Register() {
  const { signUp } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data.username, data.email, data.password);
  };
  return (
    <div>
      <form
        className="mt-8 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Username</label>
          <input
            {...register("username", {
              required: "Username is required",
              minLength: { value: 3, message: "At least 3 characters" },
              maxLength: { value: 20, message: "At most 20 characters" },
            })}
            type="text"
            placeholder="User name"
            className={inputClass}
          />
          {errors.username && (
            <span className="text-sm text-red-500">
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className={labelClass}>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className={inputClass}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className={labelClass}>Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            })}
            type="password"
            placeholder="Password"
            className={inputClass}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <button type="submit" className={buttonClass}>
          Register
        </button>
      </form>
    </div>
  );
}
