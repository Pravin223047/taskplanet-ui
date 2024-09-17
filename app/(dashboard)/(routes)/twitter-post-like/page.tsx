import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const TwitterPostLike = () => {
  const tasks = [
    {
      id: 1,
      title: "Like a Task Planet Post on Twitter",
      description:
        "Like the Task Planet post on Twitter, take a screenshot for proof, and submit it.",
      earnings: 20,
      completed: false, // Add completed status
    },
    {
      id: 2,
      title: "Retweet Task Planet Post on Twitter",
      description:
        "Retweet the Task Planet post on Twitter and take a screenshot as proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Twitter Post Like"
        textColor="text-red-500" // Change color as needed
        bgColor="bg-red-800"
      />
    </div>
  );
};

export default TwitterPostLike;
