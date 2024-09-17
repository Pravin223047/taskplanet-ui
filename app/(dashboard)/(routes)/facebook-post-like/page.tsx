import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const FacebookPostLike = () => {
  const tasks = [
    {
      id: 1,
      title: "Like on Task Planet Post on Facebook",
      description:
        "Like the Task Planet post on Facebook, take a screenshot for proof, and submit it.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Facebook Post Like"
        textColor="text-yellow-500" // Change color as needed
        bgColor="bg-yellow-800"
      />
    </div>
  );
};

export default FacebookPostLike;
