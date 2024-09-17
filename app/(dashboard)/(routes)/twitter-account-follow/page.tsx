import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const TwitterAccountFollow = () => {
  const tasks = [
    {
      id: 1,
      title: "Follow Task Planet on Twitter",
      description:
        "Follow Task Planet's Twitter account and take a screenshot as proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
    {
      id: 2,
      title: "Unfollow and Refollow Task Planet on Twitter",
      description:
        "Unfollow and then follow Task Planet's Twitter account again for verification.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Twitter Account Follow"
        textColor="text-blue-500" // Change color as needed
        bgColor="bg-blue-800"
      />
    </div>
  );
};

export default TwitterAccountFollow;
