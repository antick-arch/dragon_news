'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children }) => {
  const path = usePathname();
  const activeLink = path === href;
  return <Link className={`${activeLink && 'border-b-2 border-purple-500'}`} href={href}>{children}</Link>;
};

export default Navlink;
