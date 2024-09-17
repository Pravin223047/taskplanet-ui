import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const YouTubeShortsLike = () => {
  const tasks = [
    {
      id: 1,
      title: "Like Task Planet’s YouTube Shorts",
      description:
        "Like the Task Planet’s YouTube Shorts video and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
    {
      id: 2,
      title: "Like Another Task Planet’s YouTube Shorts",
      description:
        "Like another Task Planet’s YouTube Shorts video and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="YouTube Shorts Like"
        textColor="text-red-500" // Change color as needed
        bgColor="bg-red-800"
      />
    </div>
  );
};

export default YouTubeShortsLike;
