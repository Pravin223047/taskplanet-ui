"use client";

import React, { useState } from "react";
import Modal from "@/components/Modal"; // Ensure Modal component exists

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  totalEarnings: number;
  selfEarnings: number;
  referralEarnings: number;
  rewardEarnings: number;
  serialNumber: string;
  kycProvided: boolean;
  isPremium: boolean;
}

interface UserListProps {
  users: User[];
  onUserSelect: (userData: {
    userDetails: {
      name: string;
      email: string;
      avatar: string;
      serialNumber: string;
      kycProvided: boolean;
      isPremium: boolean;
    };
    totalEarnings: number;
    selfEarnings: number;
    referralEarnings: number;
    rewardEarnings: number;
  }) => void; // Adjust the function to accept userDetails and earnings
}

const UserList: React.FC<UserListProps> = ({ users, onUserSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const openModal = (user: User) => {
    setSelectedUser(user); // Save selected user details
    // Pass both user details and earnings fields to onUserSelect
    onUserSelect({
      userDetails: {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        serialNumber: user.serialNumber,
        kycProvided: user.kycProvided,
        isPremium: user.isPremium,
      },
      totalEarnings: user.totalEarnings,
      selfEarnings: user.selfEarnings,
      referralEarnings: user.referralEarnings,
      rewardEarnings: user.rewardEarnings,
    });
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null); // Reset selected user on modal close
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openModal(user)}
          >
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar || "/taskplanetwebp.webp"} // Fallback avatar
                alt={user.name}
                className="w-16 h-16 rounded-full border-2 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal showing selected user earnings sent to parent */}
      {selectedUser && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 md:text-2xl rounded-md">
            {selectedUser.name}&apos;s Earnings Details
          </h2>

          <div className="flex items-center space-x-4 mb-6">
            <img
              src={selectedUser.avatar || "/taskplanetwebp.webp"}
              alt={selectedUser.name}
              className="w-16 h-16 rounded-full border-2 border-gray-300"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                {" "}
                {selectedUser.name}{" "}
              </h3>
              <p className="text-sm text-gray-600"> {selectedUser.email} </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-2 md:gap-4 lg:grid-cols-3 grid-cols-2">
              <div className="bg-blue-100 p-2 md:p-3 rounded-md">
                <label className="font-semibold text-gray-700 block mb-1 text-sm md:text-base">
                  Serial Number:
                </label>
                <input
                  type="text"
                  value={selectedUser.serialNumber || "N/A"}
                  readOnly
                  className="bg-blue-200 text-gray-600 p-2 rounded-md w-full text-sm md:text-base"
                />
              </div>
              <div className="bg-green-100 p-3 rounded-md">
                <label className="font-semibold text-gray-700 block mb-1 text-sm md:text-base">
                  Total Earnings:
                </label>
                <input
                  type="text"
                  value={`₹${selectedUser.totalEarnings.toFixed(2)}`}
                  readOnly
                  className="bg-green-200 text-gray-600 p-2 rounded-md w-full text-sm md:text-base"
                />
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <label className="font-semibold text-gray-700 block mb-1 text-sm md:text-base">
                  Self Earnings:
                </label>
                <input
                  type="text"
                  value={`₹${selectedUser.selfEarnings.toFixed(2)}`}
                  readOnly
                  className="bg-yellow-200 text-gray-600 p-2 rounded-md w-full text-sm md:text-base"
                />
              </div>
              <div className="bg-red-100 p-3 rounded-md">
                <label className="font-semibold text-gray-700 block mb-1 text-sm md:text-base">
                  Referral Earnings:
                </label>
                <input
                  type="text"
                  value={`₹${selectedUser.referralEarnings.toFixed(2)}`}
                  readOnly
                  className="bg-red-200 text-gray-600 p-2 rounded-md w-full text-sm md:text-base"
                />
              </div>
              <div className="bg-purple-100 p-3 rounded-md">
                <label className="font-semibold text-gray-700 block mb-1 text-sm md:text-base">
                  Reward Earnings:
                </label>
                <input
                  type="text"
                  value={`₹${selectedUser.rewardEarnings.toFixed(2)}`}
                  readOnly
                  className="bg-purple-200 text-gray-600 p-2 rounded-md w-full text-sm md:text-base"
                />
              </div>
              <div className="bg-pink-100 p-3 rounded-md">
                <label className="font-semibold text-gray-700 block mb-1 text-sm md:text-base">
                  Referral Reward:
                </label>
                <input
                  type="text"
                  value="₹0.00"
                  readOnly
                  className="bg-pink-200 text-gray-600 p-2 rounded-md w-full text-sm md:text-base"
                />
              </div>
              <div className="bg-teal-100 p-3 rounded-md">
                <label className="font-semibold text-gray-700 block mb-1 text-sm md:text-base">
                  KYC Provided:
                </label>
                <input
                  type="text"
                  value={selectedUser.kycProvided ? "Yes" : "No"}
                  readOnly
                  className="bg-teal-200 text-gray-600 p-2 rounded-md w-full text-sm md:text-base"
                />
              </div>
              <div className="bg-indigo-100 p-3 rounded-md">
                <label className="font-semibold text-gray-700 block mb-1 text-sm md:text-base">
                  Premium Member:
                </label>
                <input
                  type="text"
                  value={selectedUser.isPremium ? "Yes" : "No"}
                  readOnly
                  className="bg-indigo-200 text-gray-600 p-2 rounded-md w-full text-sm md:text-base"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UserList;
