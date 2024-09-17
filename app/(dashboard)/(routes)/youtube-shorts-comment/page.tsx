import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const YouTubeShortsComment = () => {
  const tasks = [
    {
      id: 1,
      title: "Comment on Task Planet’s YouTube Shorts",
      description:
        "Comment on Task Planet’s YouTube Shorts video and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
    {
      id: 2,
      title: "Comment on Another Task Planet’s YouTube Shorts",
      description:
        "Comment on another Task Planet’s YouTube Shorts video and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="YouTube Shorts Comment"
        textColor="text-orange-500" // Change color as needed
        bgColor="bg-orange-800"
      />
    </div>
  );
};

export default YouTubeShortsComment;
