"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  CircuitBoardIcon,
  CpuIcon,
  File,
  HomeIcon,
  LayoutDashboard,
  ListCheckIcon,
  Settings,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PremiumCounter from "./PremiumCounter";
const monsterrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-rose-500",
  },
  {
    label: "Home",
    icon: HomeIcon,
    href: "/Home",
    color: "text-sky-500",
  },
  {
    label: "Tasks",
    icon: File,
    href: "https://taskplanet.org/home/task",
    color: "text-violet-500",
  },
  {
    label: "Create Tasks",
    icon: CpuIcon,
    href: "https://taskplanet.org/home/create-task",
    color: "text-pink-700",
  },
  {
    label: "Manage Tasks",
    icon: ListCheckIcon,
    href: "https://taskplanet.org/home/manage-task",
    color: "text-orange-700",
  },
  {
    label: "Leader Board",
    icon: CircuitBoardIcon,
    href: "/leaderboard",
    color: "text-emerald-500",
  },
  {
    label: "Account",
    icon: User,
    href: "/Account",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const SideBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-900 border-r-2 border-r-slate-700  text-white">
      <div className="px-3 py-2 pt-0 flex-1">
        <Link href="/Home" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image
              fill
              alt="Logo"
              src="/taskplanetwebp.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <h1 className={cn("text-2xl font-bold", monsterrat.className)}>
            TaskPlanet UI
          </h1>
        </Link>

        <div className="space-y-2">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10",
                pathname === route.href && "bg-white/10"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <PremiumCounter />
    </div>
  );
};

export default SideBar;
