"use client";
import { XCircle } from "lucide-react"; // For closing icon

interface LinkedinTaskModalProps {
  isLinkedinOpen: boolean;
  onClose: () => void;
}

const LinkedinTaskModal: React.FC<LinkedinTaskModalProps> = ({
  isLinkedinOpen,
  onClose,
}) => {
  const visitTask = () => {
    // Redirect to the LinkedIn follow task
    window.location.href = "/linkedin-profile-follow";
  };

  return (
    <div>
      {isLinkedinOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-4xl p-4 sm:p-6 md:p-8 rounded-lg shadow-lg overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-red-600 hover:text-red-700"
            >
              <XCircle size={30} />
            </button>

            <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
              LinkedIn Task
            </h1>

            {/* LinkedIn Profile Follow Task */}
            <div
              onClick={visitTask}
              className="mb-4 sm:mb-6 bg-blue-100 border border-blue-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center cursor-pointer"
            >
              <div className="hidden sm:block w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
                  LinkedIn Profile Follow
                </h2>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Follow Any Profile on LinkedIn & Earn Exciting Rewards &
                  Points
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img
                  src="/LinkedIn/linkedinimage1.png"
                  alt="Follow Profile"
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

export default LinkedinTaskModal;
