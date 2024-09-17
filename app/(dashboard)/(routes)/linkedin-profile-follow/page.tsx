import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const LinkedInProfileFollow = () => {
  const tasks = [
    {
      id: 1,
      title: "Follow Task Planet on LinkedIn",
      description:
        "Follow Task Planet's LinkedIn profile and take a screenshot as proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="LinkedIn Profile Follow"
        textColor="text-blue-500" // Change color as needed
        bgColor="bg-blue-800"
      />
    </div>
  );
};

export default LinkedInProfileFollow;
