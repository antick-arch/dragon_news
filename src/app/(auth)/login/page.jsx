import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="container mx-auto min-h-[80vh] bg-gray-100 flex justify-center items-center mt-5">
      <div className="bg-white rounded-md p-18">
        <h2 className="text-center text-4xl font-semibold">
          Login your account
        </h2>
        <div className="flex w-full flex-col">
          <div className="divider"></div>
        </div>
        <form>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold text-xl text-[#403F3F]">
              Email Address
            </legend>
            <input
              type="email"
              className="input bg-[#F3F3F3] w-full"
              placeholder="Enter your email address"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold text-xl text-[#403F3F]">
              Password
            </legend>
            <input
              type="password"
              className="input bg-[#F3F3F3] w-full"
              placeholder="Enter your password"
            />
          </fieldset>
          <button className="btn w-full bg-[#403F3F] text-white mt-7">Submit</button>
        </form>
        <p className="mt-7">Dont’t Have An Account ? <Link className="text-red-500" href={'/registration'}>Register</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
