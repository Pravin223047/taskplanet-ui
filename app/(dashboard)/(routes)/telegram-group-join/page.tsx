import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const TelegramGroupJoin = () => {
  const tasks = [
    {
      id: 1,
      title: "Join Task Planet Group on Telegram",
      description:
        "Join Task Planet's Telegram group and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Telegram Group Join"
        textColor="text-purple-500" // Change color as needed
        bgColor="bg-purple-800"
      />
    </div>
  );
};

export default TelegramGroupJoin;
