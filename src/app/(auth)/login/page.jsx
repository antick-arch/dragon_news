import React from "react";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-188 h-175 flex flex-col items-center justify-center bg-gray-200">
        <h2 className="text-3xl font-medium">Login your account</h2>
        <form>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your email address"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your password"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
