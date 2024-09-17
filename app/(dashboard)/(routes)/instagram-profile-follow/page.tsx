import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const InstagramProfileFollow = () => {
  const tasks = [
    {
      id: 1,
      title: "Follow Task Planet on Instagram",
      description:
        "Follow Task Planet's Instagram profile and take a screenshot as proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Instagram Profile Follow"
        textColor="text-yellow-500" // Change color as needed
        bgColor="bg-yellow-800"
      />
    </div>
  );
};

export default InstagramProfileFollow;
