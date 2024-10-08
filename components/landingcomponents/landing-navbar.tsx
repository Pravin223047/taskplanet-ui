"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const LandingNavBar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="taskplanetwebp" src="/taskplanetwebp.webp" />
        </div>
        <h1 className={cn("text-2xl text-blue-500 font-bold", font.className)}>
          TaskPlanet
        </h1>
      </Link>

      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="rounded-md">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavBar;
