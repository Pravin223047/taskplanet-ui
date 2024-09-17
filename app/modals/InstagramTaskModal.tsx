"use client";
import { useState } from "react";
import { XCircle } from "lucide-react"; // For closing icon
import { toast } from "@/hooks/use-toast";

interface InstagramTaskModalProps {
  isInstaOpen: boolean;
  onClose: () => void;
}

const InstagramTaskModal: React.FC<InstagramTaskModalProps> = ({
  isInstaOpen,
  onClose,
}) => {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const handleTaskSelect = (task: string) => {
    setSelectedTask(task);
  };

  const visitTask = () => {
    if (selectedTask) {
      const taskURLs: Record<string, string> = {
        like: "/instagram-post-like",
        comment: "/instagram-post-comment",
        follow: "/instagram-profile-follow",
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
      {isInstaOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-4xl p-4 sm:p-6 md:p-8 rounded-lg shadow-lg overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-red-600 hover:text-red-700"
            >
              <XCircle size={30} />
            </button>

            <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
              Instagram Tasks
            </h1>

            {/* Instagram Post Like */}
            <div
              onClick={() => handleTaskSelect("like")}
              className={`mb-4 sm:mb-6 bg-red-100 border border-red-200 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "like" ? "ring-4 ring-red-400" : ""
              }`}
            >
              <input
                type="radio"
                id="like"
                name="task"
                value="like"
                className="hidden"
                checked={selectedTask === "like"}
                onChange={() => handleTaskSelect("like")}
              />
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-red-600">
                  Instagram Post Like
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Like Any Instagram Post & Earn Exciting Rewards & Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/instagram/instaimage1.png"
                  alt="Woman Liking Post"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Instagram Post Comment */}
            <div
              onClick={() => handleTaskSelect("comment")}
              className={`mb-4 sm:mb-6 bg-blue-100 border border-blue-200 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "comment" ? "ring-4 ring-blue-400" : ""
              }`}
            >
              <input
                type="radio"
                id="comment"
                name="task"
                value="comment"
                className="hidden"
                checked={selectedTask === "comment"}
                onChange={() => handleTaskSelect("comment")}
              />
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
                  Instagram Post Comment
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Comment on Any Instagram Post & Earn Exciting Rewards & Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/instagram/instaimage2.png"
                  alt="Commenting Post"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Instagram Profile Follow */}
            <div
              onClick={() => handleTaskSelect("follow")}
              className={`mb-4 sm:mb-6 bg-yellow-100 border border-yellow-200 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "follow" ? "ring-4 ring-yellow-400" : ""
              }`}
            >
              <input
                type="radio"
                id="follow"
                name="task"
                value="follow"
                className="hidden"
                checked={selectedTask === "follow"}
                onChange={() => handleTaskSelect("follow")}
              />
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-yellow-600">
                  Instagram Profile Follow
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Follow Any Profile on Instagram & Earn Exciting Rewards
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/instagram/instaimage3.png"
                  alt="Follow Us"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={visitTask}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
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

export default InstagramTaskModal;
