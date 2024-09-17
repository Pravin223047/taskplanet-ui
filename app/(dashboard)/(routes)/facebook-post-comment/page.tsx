import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const FacebookPostComment = () => {
  const tasks = [
    {
      id: 1,
      title: "Comment on Task Planet Post on Facebook",
      description:
        "Comment on the Task Planet post on Facebook and take a screenshot as proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Facebook Post Comment"
        textColor="text-red-500" // Change color as needed
        bgColor="bg-red-800"
      />
    </div>
  );
};

export default FacebookPostComment;
