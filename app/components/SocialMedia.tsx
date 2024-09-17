"use client";
import React, { useState } from "react";
import { workExperience } from "../data";
import InstagramTaskModal from "../modals/InstagramTaskModal";
import FacebookTaskModal from "../modals/FacebookTaskModal";
import LinkedinTaskModal from "../modals/LinkedinTaskModal";
import TelegramTaskModal from "../modals/TelegramTaskModal";
import YoutubeTaskModal from "../modals/YoutubeTaskModal";
import TwitterTaskModal from "../modals/TwitterTaskModal";

// Function to get background class based on the title
const getBackgroundClass = (title: string) => {
  switch (title) {
    case "Instagram":
      return "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500";
    case "Facebook":
      return "bg-gradient-to-r from-blue-500 to-blue-700";
    case "Twitter":
      return "bg-gradient-to-r from-blue-300 to-blue-500";
    case "YouTube":
      return "bg-gradient-to-r from-red-500 to-red-700";
    case "LinkedIn":
      return "bg-gradient-to-r from-blue-700 to-blue-900";
    case "Telegram":
      return "bg-gradient-to-r from-blue-400 to-blue-600";
    default:
      return "bg-gray-200";
  }
};

const SocialMedia = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  // Function to handle opening specific modals
  const handleCardClick = (title: string) => {
    setOpenModal(title);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="py-8 w-full">
      <h1 className="text-xl font-bold mb-6">
        Tasks - <span className="text-purple-800">Social Media</span>
      </h1>

      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className={`relative flex flex-col lg:flex-row items-start p-4 h-full w-full border-2 border-purple-950 rounded-xl gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ${getBackgroundClass(
              card.title
            )} transform hover:scale-105 transition-transform duration-300 cursor-pointer`}
            title={`${card.title} - tasks`}
            aria-label={`${card.title} tasks`}
            onClick={() => handleCardClick(card.title)} // Handle card click
          >
            {/* Number Display */}
            <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-md shadow-md">
              +{card.number}
            </div>

            <img
              src={card.icon}
              alt={card.title}
              className="h-10 object-contain bg-white rounded-md p-2"
            />
            <div className="flex flex-col justify-center text-left">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                {card.title}
              </h2>
              <p className="text-white">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render the modals based on the selected title */}
      {openModal === "Instagram" && (
        <InstagramTaskModal isInstaOpen={true} onClose={closeModal} />
      )}
      {openModal === "Facebook" && (
        <FacebookTaskModal isFacebookOpen={true} onClose={closeModal} />
      )}
      {openModal === "LinkedIn" && (
        <LinkedinTaskModal isLinkedinOpen={true} onClose={closeModal} />
      )}
      {openModal === "Twitter" && (
        <TwitterTaskModal isTwitterOpen={true} onClose={closeModal} />
      )}
      {openModal === "YouTube" && (
        <YoutubeTaskModal isYoutubeOpen={true} onClose={closeModal} />
      )}
      {openModal === "Telegram" && (
        <TelegramTaskModal isTelegramOpen={true} onClose={closeModal} />
      )}

      {/* Add other modals for Facebook, Twitter, etc. */}
    </div>
  );
};

export default SocialMedia;
