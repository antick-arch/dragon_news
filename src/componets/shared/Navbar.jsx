"use client";
import Image from "next/image";
import React from "react";
import userImg from "@/assets/user.png";
import Navlink from "./Navlink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
const Navbar = () => {
    const { data: session ,isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user);
  return (
    <div className="grid grid-cols-3 container mx-auto mt-5">
      <div></div>
      <ul className="flex justify-center items-center text-[#706F6F] gap-3 place-content-center">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/about-us">About</Navlink>
        <Navlink href="/career">Career</Navlink>
      </ul>
      <div className="flex gap-3 place-content-end">
        {isPending ? (<span className="loading loading-spinner loading-xl"></span>) : user ? (<div className="flex gap-2 items-center">
            <h2>Welcome, <span className="text-xl font-semibold text-red-500">{user.name}</span></h2>
            <Image className="rounded-full" src={user?.image || userImg} width={41} height={41} alt="user logo" />
        <button
          onClick={async () => await authClient.signOut()}
          className="btn bg-[#403F3F] text-white w-35"
        >
          Log Out
        </button>
        </div>) : (<Link href={"/login"} className="btn bg-[#403F3F] text-white w-35">
          Login
        </Link>)}
        
        
      </div>
    </div>
  );
};

export default Navbar;
