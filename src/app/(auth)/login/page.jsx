import React from "react";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-188 h-175 flex flex-col items-center justify-center bg-gray-200">
        <h2>Login your account</h2>
        <form>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your name?</legend>
            <input type="text" className="input" placeholder="Type here" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your name?</legend>
            <input type="text" className="input" placeholder="Type here" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
