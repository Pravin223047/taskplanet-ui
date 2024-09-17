"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Task Management",
    description: "Create, assign, and organize tasks efficiently.",
    background: "bg-gradient-to-r from-blue-500 to-blue-800",
  },
  {
    title: "Collaborative Tools",
    description: "Chat, share files, and discuss within teams.",
    background: "bg-gradient-to-r from-green-500 to-green-800",
  },
  {
    title: "Advanced Scheduling",
    description: "Track progress with calendars and Gantt charts.",
    background: "bg-gradient-to-r from-purple-500 to-purple-800",
  },
  {
    title: "Performance Tracking",
    description: "Generate reports and analyze project metrics.",
    background: "bg-gradient-to-r from-pink-500 to-pink-800",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Features of <span className="text-orange-600">TaskPlanet</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className={`border-none text-white ${feature.background}`}
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {feature.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-4 text-sm md:text-base font-light">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
