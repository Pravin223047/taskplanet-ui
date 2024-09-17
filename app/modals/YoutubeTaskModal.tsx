"use client";
import { useState } from "react";
import { XCircle } from "lucide-react"; // For closing icon
import { toast } from "@/hooks/use-toast";

interface YoutubeTaskModalProps {
  isYoutubeOpen: boolean;
  onClose: () => void;
}

const YoutubeTaskModal: React.FC<YoutubeTaskModalProps> = ({
  isYoutubeOpen,
  onClose,
}) => {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const handleTaskSelect = (task: string) => {
    setSelectedTask(task);
  };

  const visitTask = () => {
    if (selectedTask) {
      const taskURLs: Record<string, string> = {
        shortsLike: "/youtube-shorts-like",
        shortsComment: "/youtube-shorts-comment",
        videosLike: "/youtube-videos-like",
        videosComment: "/youtube-videos-comment",
        channelSubscribe: "/youtube-channel-subscribe",
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
      {isYoutubeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-4xl p-4 sm:p-6 md:p-8 rounded-lg shadow-lg overflow-y-auto h-[80vh]">
            {/* Modal is scrollable due to max height */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-red-600 hover:text-red-700"
            >
              <XCircle size={30} />
            </button>

            <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
              YouTube Tasks
            </h1>

            {/* YouTube Shorts Like */}
            <div
              onClick={() => handleTaskSelect("shortsLike")}
              className={`mb-4 sm:mb-6 bg-red-100 border border-red-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "shortsLike" ? "ring-4 ring-red-500" : ""
              }`}
            >
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-red-600">
                  YouTube Shorts Like
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Like Any YouTube Shorts & Earn Exciting Rewards & Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/YouTube/youtubeimage1.png" // Replace this with the correct image path
                  alt="Like Shorts"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* YouTube Shorts Comment */}
            <div
              onClick={() => handleTaskSelect("shortsComment")}
              className={`mb-4 sm:mb-6 bg-orange-100 border border-orange-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "shortsComment" ? "ring-4 ring-orange-500" : ""
              }`}
            >
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-orange-600">
                  YouTube Shorts Comment
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Comment on Any YouTube Shorts & Earn Exciting Rewards & Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/YouTube/youtubeimage2.png" // Replace this with the correct image path
                  alt="Comment on Shorts"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* YouTube Videos Like */}
            <div
              onClick={() => handleTaskSelect("videosLike")}
              className={`mb-4 sm:mb-6 bg-pink-100 border border-pink-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "videosLike" ? "ring-4 ring-pink-500" : ""
              }`}
            >
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-pink-600">
                  YouTube Videos Like
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Like Any YouTube Video & Earn Exciting Rewards & Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/YouTube/youtubeimage3.png" // Replace this with the correct image path
                  alt="Like Videos"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* YouTube Videos Comment */}
            <div
              onClick={() => handleTaskSelect("videosComment")}
              className={`mb-4 sm:mb-6 bg-purple-100 border border-purple-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "videosComment" ? "ring-4 ring-purple-500" : ""
              }`}
            >
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-purple-600">
                  YouTube Videos Comment
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Comment on Any YouTube Video & Earn Exciting Rewards & Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/YouTube/youtubeimage4.png" // Replace this with the correct image path
                  alt="Comment on Videos"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* YouTube Channel Subscribe */}
            <div
              onClick={() => handleTaskSelect("channelSubscribe")}
              className={`mb-4 sm:mb-6 bg-black-100 border border-black-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer ${
                selectedTask === "channelSubscribe"
                  ? "ring-4 ring-black-500"
                  : ""
              }`}
            >
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-black-600">
                  YouTube Channel Subscribe
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Subscribe to Any YouTube Channel & Earn Exciting Rewards &
                  Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/YouTube/youtubeimage5.png" // Replace this with the correct image path
                  alt="Subscribe Channel"
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

export default YoutubeTaskModal;
