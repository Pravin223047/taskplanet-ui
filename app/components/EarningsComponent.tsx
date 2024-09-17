"use client";

import Modal from "@/components/Modal";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";

interface UserDetails {
  name: string;
  email: string;
  avatar: string;
}

interface EarningsProps {
  totalEarnings: number;
  selfEarnings: number;
  referralEarnings: number;
  rewardEarnings: number;
  userDetails?: UserDetails; // Make userDetails optional
}

const EarningsComponent: React.FC<EarningsProps> = ({
  totalEarnings,
  selfEarnings,
  referralEarnings,
  rewardEarnings,
  userDetails, // Pass user details to display in the modal
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useUser(); // Get current user details

  console.log(user);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Use userDetails prop if available, otherwise fallback to current user
  const displayUserDetails = userDetails || {
    name: user.user?.fullName || "Guest",
    email: user.user?.emailAddresses[0]?.emailAddress || "Not Provided",
    avatar: user.user?.imageUrl || "/taskplanetwebp.webp",
  };

  const currentUser = {
    totalEarnings: 1000.0,
    selfEarnings: 500.0,
    referralEarnings: 200.0,
    rewardEarnings: 300.0,
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Earnings Statistics{" "}
        <span className="text-rose-700">
          {userDetails && userDetails.name
            ? `- ${displayUserDetails.name}`
            : `- ${user.user?.fullName}`}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div
          className="p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg shadow-lg cursor-pointer flex flex-col justify-center items-center text-center"
          onClick={openModal}
        >
          <h3 className="text-lg md:text-xl font-bold">Total Earnings</h3>
          <p className="text-xl md:text-2xl mt-2">
            ₹{" "}
            {!totalEarnings
              ? `${currentUser.totalEarnings.toFixed(2)}`
              : `${totalEarnings.toFixed(2)}`}
          </p>
        </div>
        <div
          className="p-4 bg-gradient-to-r from-teal-400 to-green-500 text-white rounded-lg shadow-lg cursor-pointer flex flex-col justify-center items-center text-center"
          onClick={openModal}
        >
          <h3 className="text-lg md:text-xl font-bold">Self Earnings</h3>
          <p className="text-xl md:text-2xl mt-2">
            ₹{" "}
            {!selfEarnings
              ? `${currentUser.selfEarnings.toFixed(2)}`
              : `${selfEarnings.toFixed(2)}`}
          </p>
        </div>
        <div
          className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg shadow-lg cursor-pointer flex flex-col justify-center items-center text-center"
          onClick={openModal}
        >
          <h3 className="text-lg md:text-xl font-bold">Referral Earnings</h3>
          <p className="text-xl md:text-2xl mt-2">
            ₹
            {!referralEarnings
              ? `${currentUser.referralEarnings.toFixed(2)}`
              : `${referralEarnings.toFixed(2)}`}
          </p>
        </div>
        <div
          className="p-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg shadow-lg cursor-pointer flex flex-col justify-center items-center text-center"
          onClick={openModal}
        >
          <h3 className="text-lg md:text-xl font-bold">Reward Earnings</h3>
          <p className="text-xl md:text-2xl mt-2">
            ₹{" "}
            {!rewardEarnings
              ? `${currentUser.rewardEarnings.toFixed(2)}`
              : `${rewardEarnings.toFixed(2)}`}
          </p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {userDetails && userDetails.name
            ? `${displayUserDetails.name}`
            : `${user.user?.fullName}`}
          's Earnings Details
        </h2>

        <div className="flex items-center space-x-4 mb-6">
          <img
            src={
              userDetails && userDetails.avatar
                ? `${displayUserDetails.avatar}`
                : `${user.user?.imageUrl}`
            }
            alt={displayUserDetails.name}
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
          <div>
            <h3 className="text-xl font-bold">
              {" "}
              {userDetails && userDetails.name
                ? `${displayUserDetails.name}`
                : `${user.user?.fullName}`}
            </h3>
            <p className="text-sm text-gray-600">
              {" "}
              {userDetails && userDetails.name
                ? `${displayUserDetails.email}`
                : `${user.user?.emailAddresses[0].emailAddress}`}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Total Earnings:</span>
            <span className="text-gray-600">
              ₹{" "}
              {!totalEarnings
                ? `${currentUser.totalEarnings.toFixed(2)}`
                : `${totalEarnings.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Self Earnings:</span>
            <span className="text-gray-600">
              ₹
              {!selfEarnings
                ? `${currentUser.selfEarnings.toFixed(2)}`
                : `${selfEarnings.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">
              Referral Earnings:
            </span>
            <span className="text-gray-600">
              ₹{" "}
              {!referralEarnings
                ? `${currentUser.referralEarnings.toFixed(2)}`
                : `${referralEarnings.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">
              Reward Earnings:
            </span>
            <span className="text-gray-600">
              ₹{" "}
              {!rewardEarnings
                ? `${currentUser.rewardEarnings.toFixed(2)}`
                : `${rewardEarnings.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">
              Self Referral Reward:
            </span>
            <span className="text-gray-600">₹0.00</span> {/* Placeholder */}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EarningsComponent;
