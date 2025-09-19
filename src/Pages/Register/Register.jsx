import React from "react";
import logo from "../../assets/image/Done_ring_round.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Register Data:", data);

    // هنا تقدر تبعت الداتا للـ API
    // لو التسجيل نجح نوديه للـ Login
    navigate("/login");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={logo} alt="Your Company" className="mx-auto h-20 w-auto" />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Full Name
            </label>
            <div className="mt-2">
              <input
                {...register("fullName", { required: "Full name is required" })}
                type="text"
                placeholder="John Doe"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-none placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="example@email.com"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-none placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Phone Number
            </label>
            <div className="mt-2">
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/, // يقبل أرقام فقط من 10 لـ 15 رقم
                    message: "Enter a valid phone number",
                  },
                })}
                type="tel"
                placeholder="01012345678"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-none placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Password
            </label>
            <div className="mt-2">
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="********"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-none placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
                type="password"
                placeholder="********"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-none placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
