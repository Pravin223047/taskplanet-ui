"use client";
import { useState } from "react";
import { XCircle } from "lucide-react"; // For closing icon
import { toast } from "@/hooks/use-toast";

interface TelegramTaskModalProps {
  isTelegramOpen: boolean;
  onClose: () => void;
}

const TelegramTaskModal: React.FC<TelegramTaskModalProps> = ({
  isTelegramOpen,
  onClose,
}) => {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const handleTaskSelect = (task: string) => {
    setSelectedTask(task);
  };

  const visitTask = () => {
    if (selectedTask) {
      const taskURLs: Record<string, string> = {
        subscribe: "/telegram-channel-subscribe",
        join: "/telegram-group-join",
      };

      // Redirect to the selected task
      window.location.href = taskURLs[selectedTask];
    } else {
      toast({
        title: "Tasks Functionality",
        description: "Please select a task to visit.",
      });
    }
  };

  return (
    <div>
      {isTelegramOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-4xl p-4 sm:p-6 md:p-8 rounded-lg shadow-lg overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-red-600 hover:text-red-700"
            >
              <XCircle size={30} />
            </button>

            <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
              Telegram Tasks
            </h1>

            {/* Telegram Channel Subscribe */}
            <div
              onClick={() => handleTaskSelect("subscribe")}
              className={`mb-4 sm:mb-6 bg-blue-100 border border-blue-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "subscribe" ? "ring-4 ring-blue-500" : ""
              }`}
            >
              <input
                type="radio"
                id="subscribe"
                name="task"
                value="subscribe"
                className="hidden"
                checked={selectedTask === "subscribe"}
                onChange={() => handleTaskSelect("subscribe")}
              />
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
                  Telegram Channel Subscribe
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Subscribe to Any Telegram Channel & Earn Exciting Rewards &
                  Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/Telegram/telegramimage1.png"
                  alt="Subscribe Channel"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Telegram Group Join */}
            <div
              onClick={() => handleTaskSelect("join")}
              className={`mb-4 sm:mb-6 bg-purple-100 border border-purple-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "join" ? "ring-4 ring-purple-500" : ""
              }`}
            >
              <input
                type="radio"
                id="join"
                name="task"
                value="join"
                className="hidden"
                checked={selectedTask === "join"}
                onChange={() => handleTaskSelect("join")}
              />
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-purple-600">
                  Telegram Group Join
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Join Any Telegram Group & Earn Exciting Rewards & Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/Telegram/telegramimage2.png" // Replace this with the correct image path
                  alt="Join Group"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={visitTask}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Visit Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TelegramTaskModal;
