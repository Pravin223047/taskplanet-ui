"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-28 text-center space-y-7">
      <div className="text-3xl md:text-5xl space-y-6 font-extrabold">
        <h1 className="mb-4">Elevate Your Team&apos;s Productivity with</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
          <TypewriterComponent
            options={{
              strings: [
                "Task Planet UI",
                "Effortless Task Management",
                "Seamless Team Collaboration",
                "Advanced Scheduling Tools",
                "Social Media Task Automation",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>

      <div className="text-sm md:text-xl font-light text-zinc-400">
        Streamline workflows, collaborate with your team, and maximize
        efficiency with TaskPlanet.
      </div>

      <div className="space-y-4">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="md:text-lg md:p-4 rounded-md bg-rose-600 hover:bg-rose-800 font-semibold">
            Start for Free
          </Button>
        </Link>
      </div>

      <div className="text-zinc-400 text-xs md:text-sm font-normal mt-6">
        Sign up today and unlock premium features, including advanced
        collaboration tools, priority support, and team-wide management options.
      </div>
    </div>
  );
};

export default LandingHero;
