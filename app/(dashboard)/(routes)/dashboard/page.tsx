"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CircuitBoardIcon,
  CpuIcon,
  FileIcon,
  HomeIcon,
  ListCheckIcon,
  Settings,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/Home",
    bgColor: "bg-violet-500/10",
    color: "text-sky-500",
  },
  {
    label: "Tasks",
    icon: FileIcon,
    href: "https://taskplanet.org/home/task",
    bgColor: "bg-emerald-500/10",
    color: "text-violet-500",
  },
  {
    label: "Create Tasks",
    icon: CpuIcon,
    href: "https://taskplanet.org/home/create-task",
    bgColor: "bg-violet-700/10",
    color: "text-pink-700",
  },
  {
    label: "Manage Tasks",
    icon: ListCheckIcon,
    href: "https://taskplanet.org/home/manage-task",
    bgColor: "bg-orange-700/10",
    color: "text-orange-700",
  },
  {
    label: "Leader Board",
    icon: CircuitBoardIcon,
    href: "/leaderboard",
    bgColor: "bg-green-700/10",
    color: "text-emerald-500",
  },
  {
    label: "Account",
    icon: User,
    href: "/Account",
    bgColor: "bg-rose-700/10",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    bgColor: "bg-purple-700/10",
    href: "/settings",
  },
];

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="containerr">
      <div className="mb-8 space-y-4 space-x-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Explore the power of{" "}
          <span className="text-rose-700">TaskPlanet UI</span>
        </h2>

        <p className="text-muted-foreground font-medium text-sm md:text-lg text-center">
          Welcome to TaskPlanet &ndash; manage tasks, earn rewards, and make
          productivity fun!
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibo">{tool.label}</div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
