import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const TwitterPostComment = () => {
  const tasks = [
    {
      id: 1,
      title: "Comment on Task Planet Post on Twitter",
      description:
        "Comment on the Task Planet post on Twitter and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
    {
      id: 2,
      title: "Quote Tweet Task Planet Post",
      description:
        "Quote tweet the Task Planet post on Twitter and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Twitter Post Comment"
        textColor="text-orange-500" // Change color as needed
        bgColor="bg-orange-800"
      />
    </div>
  );
};

export default TwitterPostComment;
