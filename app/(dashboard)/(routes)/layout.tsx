import NavBar from "@/app/components/Navbar";
import SideBar from "@/app/components/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 bg-gray-900 md:w-72">
        <SideBar />
      </div>
      <div className="fixed top-0 left-0 md:pl-72 z-30 w-full">
        <NavBar />
      </div>

      <main className="md:pl-72 mt-24">{children}</main>
    </div>
  );
};

export default DashboardLayout;
