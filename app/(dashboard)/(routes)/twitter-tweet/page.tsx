import TaskPage from "@/app/taskspages/TaskPage";
import React from "react";

const TwitterTweet = () => {
  const tasks = [
    {
      id: 1,
      title: "Tweet About Task Planet",
      description:
        "Tweet about Task Planet on Twitter and take a screenshot for proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
    {
      id: 2,
      title: "Retweet Task Planet’s Tweet",
      description:
        "Retweet Task Planet’s tweet and take a screenshot as proof.",
      earnings: 20,
      completed: false, // Add completed status
    },
  ];
  return (
    <div>
      <TaskPage
        tasks={tasks}
        title="Twitter Tweet"
        textColor="text-green-500" // Change color as needed
        bgColor="bg-green-800"
      />
    </div>
  );
};

export default TwitterTweet;
