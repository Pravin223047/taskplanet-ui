import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const InstagramPostComment = () => {
  const tasks = [
    {
      id: 1,
      title: "Comment on Task Planet Post on Instagram",
      description:
        "Comment on the Task Planet post on Instagram and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Instagram Post Comment"
        textColor="text-blue-500" // Change color as needed
        bgColor="bg-blue-800"
      />
    </div>
  );
};

export default InstagramPostComment;
