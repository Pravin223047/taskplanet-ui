import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const YouTubeVideosLike = () => {
  const tasks = [
    {
      id: 1,
      title: "Like Task Planet’s YouTube Video",
      description:
        "Like the Task Planet’s YouTube video and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
    {
      id: 2,
      title: "Like Another Task Planet’s YouTube Video",
      description:
        "Like another Task Planet’s YouTube video and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="YouTube Videos Like"
        textColor="text-pink-500" // Change color as needed
        bgColor="bg-pink-800"
      />
    </div>
  );
};

export default YouTubeVideosLike;
