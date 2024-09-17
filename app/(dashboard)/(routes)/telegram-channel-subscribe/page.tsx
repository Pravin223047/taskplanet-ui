import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const TelegramSubscribeChannel = () => {
  const tasks = [
    {
      id: 1,
      title: "Subscribe to Task Planet Channel on Telegram",
      description:
        "Subscribe to Task Planet's Telegram channel and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Telegram Subscribe Channel"
        textColor="text-blue-500" // Change color as needed
        bgColor="bg-blue-800"
      />
    </div>
  );
};

export default TelegramSubscribeChannel;
