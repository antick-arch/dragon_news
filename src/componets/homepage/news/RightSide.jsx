"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSide = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGitHubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold mb-5">Login With</h2>
        <button
          onClick={handleGoogleSignIn}
          className="btn border-blue-400 text-blue-500"
        >
          <FaGoogle />
          Login With Google
        </button>
        <button
          onClick={handleGitHubSignIn}
          className="btn border-blue-400 text-blue-500"
        >
          <FaGithub />
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSide;
