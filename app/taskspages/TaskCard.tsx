"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button"; // Assuming you're using ShadCN's button
import { Switch } from "@/components/ui/switch"; // ShadCN's Switch component
import { useToast } from "@/hooks/use-toast";

interface TaskCardProps {
  task: any;
  textColor: string;
  bgColor: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, textColor, bgColor }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isTaskStarted, setIsTaskStarted] = useState(false);
  const { toast } = useToast();

  const handlestarttask = () => {
    // setIsTaskStarted(true);
    toast({
      title: "Start Button Functionality",
      description: "Functinality has not been implemented yet!!!",
    });
  };
  return (
    <div className="mx-auto w-full bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
      <div
        className={`p-6 w-full ${
          isCompleted ? "bg-purple-100" : "bg-slate-50"
        } transition-all`}
      >
        <h3 className={`font-bold text-lg md:text-xl ${textColor}`}>
          {task.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{task.description}</p>

        <div className="flex justify-between items-center mt-6">
          {/* Task Action Button */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button
                className={`${bgColor} hover:bg-slate-700 text-white px-4 py-2 rounded-md`}
              >
                {isTaskStarted ? "Continue Task" : "Start Task"}
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
              <Dialog.Content className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md transition-all">
                <Dialog.Title className="text-2xl font-semibold text-gray-800">
                  {task.title}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm text-gray-600">
                  {task.description}
                </Dialog.Description>
                {task.points && (
                  <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-gray-700">
                    {task.points.map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <p className="mt-4 text-lg font-semibold">
                  Earn: <span className="text-green-500">{task.earnings}</span>
                </p>
                <Button
                  className="mt-6 w-full bg-slate-800 hover:bg-slate-900 text-white"
                  onClick={handlestarttask}
                >
                  {isCompleted ? "Continue Task" : "Start Task"}
                </Button>
                <Dialog.Close className="absolute top-2 right-2 text-rose-600 hover:text-rose-800 cursor-pointer">
                  ✖
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          {/* Completed Switch */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-700 text-sm">Completed:</span>
            <Switch
              checked={isCompleted}
              onCheckedChange={(checked) => setIsCompleted(checked)}
            />
          </div>
        </div>
      </div>

      {/* Task Completion Dialog */}
      {isCompleted && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-md">
              Complete Task
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md transition-all">
              <Dialog.Title className="text-lg font-bold">
                Upload Proof for Verification
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm text-gray-600">
                To complete the task, please upload a screenshot as proof.
              </Dialog.Description>
              <div className="mt-4">
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                Submit Proof
              </Button>
              <Dialog.Close className="absolute top-2 right-2 text-rose-600 hover:text-rose-800 cursor-pointer">
                ✖
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  );
};

export default TaskCard;
