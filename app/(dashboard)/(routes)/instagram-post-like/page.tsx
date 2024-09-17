import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const InstagramPostLike = () => {
  const tasks = [
    {
      id: 1,
      title: "Like on Task Planet Post on Instagram",
      description:
        "Like the Task Planet post on Facebook, take a screenshot for proof, and submit it.",
      earnings: 20,
      completed: false, // Add completed status
    },
    {
      id: 2,
      title: "Follow Task Planet on Instagram",
      description:
        "Follow Task Planet on Instagram and take a screenshot as proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Instagram Post Like"
        textColor="text-rose-500"
        bgColor="bg-rose-800"
      />
    </div>
  );
};

export default InstagramPostLike;
