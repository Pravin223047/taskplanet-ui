import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const YouTubeVideosComment = () => {
  const tasks = [
    {
      id: 1,
      title: "Comment on Task Planet’s YouTube Video",
      description:
        "Comment on Task Planet’s YouTube video and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
    {
      id: 2,
      title: "Comment on Another Task Planet’s YouTube Video",
      description:
        "Comment on another Task Planet’s YouTube video and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="YouTube Videos Comment"
        textColor="text-purple-500" // Change color as needed
        bgColor="bg-purple-800"
      />
    </div>
  );
};

export default YouTubeVideosComment;
