"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import MobileSideBar from "./MobileSidebar";
import { Skeleton } from "@/components/ui/skeleton";

const NavBar = () => {
  const { user } = useUser(); // Destructure user from useUser

  return (
    <header className="bg-white shadow-md p-4 mb-4 flex items-center justify-between">
      {/* Mobile Sidebar */}
      <MobileSideBar />

      {/* Welcome Message */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-lg md:text-2xl font-semibold text-slate-800">
          {user ? (
            <>
              Welcome, <span className="text-blue-700">{user.fullName}</span>
            </>
          ) : (
            <Skeleton className="w-48 h-8" /> // Skeleton for the welcome message
          )}
        </h1>
      </div>

      {/* User Button */}
      <div className="flex justify-end items-center">
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Skeleton className="w-12 h-12 rounded-full" /> // Skeleton for the user button
        )}
      </div>
    </header>
  );
};

export default NavBar;
