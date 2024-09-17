"use client";
import { useState } from "react";
import TaskCard from "./TaskCard";
import { Switch } from "@/components/ui/switch"; // Ensure this path is correct

// Define the Task interface
interface Task {
  id: number;
  title: string;
  description: string;
  earnings: number;
  completed: boolean;
}

interface TaskPageProps {
  tasks: Task[];
  title: string;
  textColor: string;
  bgColor: string;
}

const TaskPage: React.FC<TaskPageProps> = ({
  tasks,
  title,
  textColor,
  bgColor,
}) => {
  const [showCompleted, setShowCompleted] = useState(false);

  // Filter tasks based on completion status and the showCompleted toggle
  const filteredTasks = tasks.filter((task) => {
    return showCompleted ? task.completed : !task.completed;
  });

  return (
    <div className="h-full bg-gray-50 pb-5">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className={`${textColor} text-4xl font-extrabold`}>{title}</h1>
          <p className="text-lg text-gray-500 mt-2">
            Complete tasks and submit proofs to earn rewards.
          </p>
        </header>

        {/* Toggle to Show Completed */}
        <div className="flex justify-end items-center mb-6">
          <label
            htmlFor="showCompleted"
            className="text-lg font-medium text-gray-700 mr-4"
          >
            Show Completed:
          </label>
          <Switch
            id="showCompleted"
            checked={showCompleted}
            onCheckedChange={(checked) => setShowCompleted(checked)}
          />
        </div>

        {/* Task Cards Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                textColor={textColor}
                bgColor={bgColor}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">
              There are no {showCompleted ? "completed" : "current"} tasks.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default TaskPage;
