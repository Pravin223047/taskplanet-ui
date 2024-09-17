import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const YouTubeChannelSubscribe = () => {
  const tasks = [
    {
      id: 1,
      title: "Subscribe to Task Planet’s YouTube Channel",
      description:
        "Subscribe to Task Planet’s YouTube channel and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
    {
      id: 2,
      title: "Unsubscribe and Resubscribe to Task Planet’s YouTube Channel",
      description:
        "Unsubscribe and then resubscribe to Task Planet’s YouTube channel for verification.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="YouTube Channel Subscribe"
        textColor="text-slate-900" // Change color as needed
        bgColor="bg-slate-800"
      />
    </div>
  );
};

export default YouTubeChannelSubscribe;
