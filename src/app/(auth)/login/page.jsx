import React from "react";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-188 h-175 flex flex-col items-center justify-center bg-gray-200">
        <h2>Login your account</h2>
        <form>
          <fieldset className="fieldset">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" className="input" placeholder="Name" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
