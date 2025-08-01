import React, { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/ axiosInstance";

import eye_icon from "../assets/images/loginimage/iconoir_eye.png";
import logo from "../assets/images/loginimage/Frame 5.png";
import imageright from "../assets/images/loginimage/loginpage-image.png";


type SignupPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};


type SignupResponse = {
  message: string;
  userId?: string;
};

const Signuppage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handclick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: SignupPayload = {
      firstName,  
      lastName,
      email,
      password,
    };

    try {
      const response = await axiosInstance.post<SignupResponse>(
        "/user/auth/signup",
        payload
      );
      console.log("Signup successful:", response.data);
    } catch (error: any) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };
  return (
    <div>
      <div className="container mx-auto min-h-screen overflow-hidden">
        <main className="bg-white text-gray-800 w-full lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
            {/* Left Side */}
            <div className="flex flex-col order-2 lg:order-1 px-6 lg:px-0 lg:justify-center py-6 max-w-3xl w-full">
              <div className="grid gap-[37px]">
                <div className="flex items-center gap-[19.59px]">
                  <div className="p-2 rounded-[19.59px] hidden lg:block">
                    <a href="">
                      <img
                        src={logo}
                        className="text-white h-[57.47px] w-[57.47px]"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 hidden lg:block lg:text-[34.29px]">
                    PersonaHub
                  </h1>
                </div>
                <div className="text-center lg:text-left gap-1 grid">
                  <h2 className="text-[24px] font-semibold lg:text-[34px]">
                    Thought Leadership Copilot
                  </h2>
                  <p className="text-sm text-blue-600 lg:text-[18px]">
                    Join the Copilot built for thought leadership.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form
                className="mt-[60px]"
                onSubmit={handclick}
                autoComplete="off"
              >
                <div className="gap-4 grid">
                  <div>
                    <label className="block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 h-[40px] lg:h-[50px] w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your first name"
                      type="text"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 h-[40px] lg:h-[50px] w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your last name"
                      type="text"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 h-[40px] lg:h-[50px] w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="login_email_field"
                      name="login_email_field"
                      placeholder="Enter your email"
                      type="email"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label
                      className="block text-sm font-medium"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 w-full h-[40px] lg:h-[50px] border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="off"
                      required
                    />
                    <div
                      className="absolute inset-y-0 right-3 top-2 flex items-center cursor-pointer"
                      onClick={() => setShowPassword((pre) => !pre)}
                    >
                      <img
                        src={eye_icon}
                        alt="Toggle visibility"
                        className="w-5 h-5"
                      />
                    </div>
                    <a
                      className="text-xs text-right block text-gray-500 hover:underline mt-1"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <button
                  className="w-full bg-[#2563EB] text-white font-semibold py-3 h-[40px] lg:h-[50px] rounded-lg hover:bg-blue-700 mt-[47px] transition"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>

              {/* Social Signin */}
              <div className="mt-[32px] flex items-center">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-400 text-sm">
                  Or Continue With
                </span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <div className="flex justify-center gap-[16px] mt-[28px]">
                <button className="border p-[8px] rounded-[8px] hover:bg-gray-100 transition">
                  <img
                    alt="Google"
                    className="h-[22px] w-[22px]"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                  />
                </button>
                <button className="border p-[8px] rounded-md hover:bg-gray-100 transition">
                  <img
                    alt="LinkedIn"
                    className="h-[22px] w-[22px]"
                    src="https://www.svgrepo.com/show/448234/linkedin.svg"
                  />
                </button>
              </div>

              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link className="text-[#3B82F6] hover:underline" to="/login">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Right Side */}
            <div className="order-1 lg:order-2 lg:block pt-0 lg:pt-6 w-full h-auto lg:h-[calc(100vh-48px)]">
              <img
                alt="Login"
                className="rounded-[16px] w-full h-[300px] hidden sm:h-[400px] lg:h-full lg:w-full lg:block object-cover"
                src={imageright}
              />
              <img
                alt="login"
                className="block w-full lg:hidden"
                src="./loginimage/image 4.svg"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Signuppage;
