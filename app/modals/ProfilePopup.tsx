"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";

interface Player {
  avatar: string;
  name: string;
  rank: number;
  points: number;
  prize: string;
  bgColor: string;
  isCurrentUser?: boolean;
  location?: string;
  memberSince?: string;
  dailyPoints?: number;
  weeklyPoints?: number;
  monthlyPoints?: number;
}

interface ProfilePopupProps {
  player: Player | null;
  onClose: () => void;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div
        className={` p-6 md:p-8 rounded-lg shadow-lg relative ${player.bgColor}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 bg-rose-200 rounded-full text-rose-500 hover:text-rose-700 hover:bg-rose-300 focus:outline-none"
        >
          <FaTimes className="h-6 w-6" />
        </button>
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
          <img
            src={player.avatar || "/taskplanetwebp.webp"}
            alt={player.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-600 shadow-lg"
          />
          <h2 className="text-xl md:text-3xl font-bold text-blue-800">
            {player.name}
          </h2>
          <div className="w-full px-2 md:px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
              <div className="flex flex-col">
                <label className="text-sm md:text-lg font-semibold text-blue-600 mb-1">
                  Rank:
                </label>
                <input
                  type="text"
                  value={player.rank}
                  disabled
                  className="bg-blue-50 text-gray-600 border border-blue-300 p-2 rounded-lg cursor-not-allowed text-sm md:text-base"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm md:text-lg font-semibold text-blue-600 mb-1">
                  Points:
                </label>
                <input
                  type="text"
                  value={player.points}
                  disabled
                  className="bg-blue-50 text-gray-600 border border-blue-300 p-2 rounded-lg cursor-not-allowed text-sm md:text-base"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm md:text-lg font-semibold text-blue-600 mb-1">
                  Prize:
                </label>
                <input
                  type="text"
                  value={player.prize}
                  disabled
                  className="bg-blue-50 text-gray-600 border border-blue-300 p-2 rounded-lg cursor-not-allowed text-sm md:text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {player.location && (
                <div className="flex flex-col mt-4">
                  <label className="text-sm md:text-lg text-left  font-semibold text-blue-600 mb-1">
                    Location:
                  </label>
                  <input
                    type="text"
                    value={player.location}
                    disabled
                    className="bg-blue-50 text-gray-600 border border-blue-300 p-2 rounded-lg cursor-not-allowed text-sm md:text-base"
                  />
                </div>
              )}
              {player.memberSince && (
                <div className="flex flex-col mt-4">
                  <label className="text-sm md:text-lg text-left  font-semibold text-green-600 mb-1">
                    Member Since:
                  </label>
                  <input
                    type="text"
                    value={player.memberSince}
                    disabled
                    className="bg-green-50 text-gray-600 border border-green-300 p-2 rounded-lg cursor-not-allowed text-sm md:text-base"
                  />
                </div>
              )}
              {player.dailyPoints && (
                <div className="flex flex-col mt-4">
                  <label className="text-sm md:text-lg text-left  font-semibold text-yellow-600 mb-1">
                    Daily Points:
                  </label>
                  <input
                    type="text"
                    value={player.dailyPoints}
                    disabled
                    className="bg-yellow-50 text-gray-600 border border-yellow-300 p-2 rounded-lg cursor-not-allowed text-sm md:text-base"
                  />
                </div>
              )}
              {player.weeklyPoints && (
                <div className="flex flex-col mt-4">
                  <label className="text-sm md:text-lg text-left  font-semibold text-red-600 mb-1">
                    Weekly Points:
                  </label>
                  <input
                    type="text"
                    value={player.weeklyPoints}
                    disabled
                    className="bg-red-50 text-gray-600 border border-red-300 p-2 rounded-lg cursor-not-allowed text-sm md:text-base"
                  />
                </div>
              )}
              {player.monthlyPoints && (
                <div className="flex flex-col mt-4">
                  <label className="text-sm md:text-lg text-left font-semibold text-purple-600 mb-1">
                    Monthly Points:
                  </label>
                  <input
                    type="text"
                    value={player.monthlyPoints}
                    disabled
                    className="bg-purple-50 text-gray-600 border border-purple-300 p-2 rounded-lg cursor-not-allowed text-sm md:text-base"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
