import { useState } from "react";
import { XCircle } from "lucide-react"; // For closing icon
import { toast } from "@/hooks/use-toast";

interface TwitterTaskModalProps {
  isTwitterOpen: boolean;
  onClose: () => void;
}

const TwitterTaskModal: React.FC<TwitterTaskModalProps> = ({
  isTwitterOpen,
  onClose,
}) => {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const handleTaskSelect = (task: string) => {
    setSelectedTask(task);
  };

  const visitTask = () => {
    if (selectedTask) {
      const taskURLs: Record<string, string> = {
        postLike: "/twitter-post-like",
        postComment: "/twitter-post-comment",
        accountFollow: "/twitter-account-follow",
        tweet: "/twitter-tweet",
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
      {isTwitterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-4xl p-4 sm:p-6 md:p-8 rounded-lg shadow-lg overflow-y-auto h-[80vh]">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-red-600 hover:text-red-700"
            >
              <XCircle size={30} />
            </button>

            <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
              Twitter Tasks
            </h1>

            {/* Task: Twitter Post Like */}
            <div
              onClick={() => handleTaskSelect("postLike")}
              className={`mb-4 sm:mb-6 bg-red-100 border border-red-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "postLike" ? "ring-4 ring-red-500" : ""
              }`}
            >
              <div className="w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-red-600">
                  Twitter Post Like
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Like Any Post on Twitter & Earn Exciting Rewards & Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/Twitter/twitterimage1.png" // Replace with correct image path
                  alt="Post Like"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Task: Twitter Post Comment */}
            <div
              onClick={() => handleTaskSelect("postComment")}
              className={`mb-4 sm:mb-6 bg-orange-100 border border-orange-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "postComment" ? "ring-4 ring-orange-500" : ""
              }`}
            >
              <div className="w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-orange-600">
                  Twitter Post Comment
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Comment on Any Post on Twitter & Earn Exciting Rewards &
                  Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/Twitter/twitterimage2.png" // Replace with correct image path
                  alt="Post Comment"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Task: Twitter Account Follow */}
            <div
              onClick={() => handleTaskSelect("accountFollow")}
              className={`mb-4 sm:mb-6 bg-blue-100 border border-blue-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "accountFollow" ? "ring-4 ring-blue-500" : ""
              }`}
            >
              <div className="w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
                  Twitter Account Follow
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Follow Any Account on Twitter & Earn Exciting Rewards & Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/Twitter/twitterimage3.png" // Replace with correct image path
                  alt="Account Follow"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Task: Twitter Tweet */}
            <div
              onClick={() => handleTaskSelect("tweet")}
              className={`mb-4 sm:mb-6 bg-green-100 border border-green-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "tweet" ? "ring-4 ring-green-500" : ""
              }`}
            >
              <div className="w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-green-600">
                  Twitter Tweet
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Tweet on Twitter & Earn Exciting Rewards & Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/Twitter/twitterimage4.png" // Replace with correct image path
                  alt="Twitter Tweet"
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

export default TwitterTaskModal;
