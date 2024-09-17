// components/ManageAccount.tsx
"use client";
import { useUser } from "@clerk/nextjs";
import { User, Gift, Phone, MessageSquare, List } from "lucide-react";
import { useRouter } from "next/navigation";

const ManageAccount = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <div className="relative px-4 py-6 w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-rose-900">
          Your Account History
        </h1>
      </div>

      <div className="flex items-start p-4 border rounded-lg shadow-md bg-gray-100 border-gray-300">
        <img
          src={user?.imageUrl || "/taskplanetwebp.webp"}
          alt="Profile"
          className="w-16 h-16 rounded-md border border-gray-900 mr-4"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-blue-800">
            {user?.fullName || "User Name"}
          </h2>
          <p className="text-md text-gray-600">
            {user?.emailAddresses[0]?.emailAddress || "user@example.com"}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div
          className="flex items-center p-4 border rounded-lg shadow-md bg-blue-50 border-blue-300 hover:bg-blue-100 transition duration-300 cursor-pointer"
          onClick={() => router.push("https://taskplanet.org/home/my-profile")}
        >
          <User className="mr-4 h-6 w-6 text-blue-600" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">My Profile</h2>
            <p className="text-sm text-gray-500">Inactive</p>
          </div>
        </div>

        <div className="flex items-center p-4 border rounded-lg shadow-md bg-yellow-50 border-yellow-300 hover:bg-yellow-100 transition duration-300 cursor-pointer">
          <Gift className="mr-4 h-6 w-6 text-yellow-600" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">
              TripleWSOLS3W
            </h2>
            <p className="text-sm text-gray-500">Sponsor</p>
          </div>
        </div>

        <div className="flex items-center p-4 border rounded-lg shadow-md bg-green-50 border-green-300 hover:bg-green-100 transition duration-300 cursor-pointer">
          <Phone className="mr-4 h-6 w-6 text-green-600" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">
              Phone Number
            </h2>
            <p className="text-sm text-gray-500">+91 1234567890</p>
          </div>
        </div>

        <div className="flex items-center p-4 border rounded-lg shadow-md bg-purple-50 border-purple-300 hover:bg-purple-100 transition duration-300 cursor-pointer">
          <MessageSquare className="mr-4 h-6 w-6 text-purple-600" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">
              WhatsApp Number
            </h2>
            <p className="text-sm text-gray-500">+91 9876543210</p>
          </div>
        </div>

        <div
          className="flex items-center p-4 border rounded-lg shadow-md bg-orange-50 border-orange-300 hover:bg-orange-100 transition duration-300 cursor-pointer"
          onClick={() =>
            router.push("https://taskplanet.org/home/leader-board")
          }
        >
          <List className="mr-4 h-6 w-6 text-orange-600" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">Leaderboard</h2>
          </div>
        </div>

        <div className="flex items-center p-4 border rounded-lg shadow-md bg-red-50 border-red-300 hover:bg-red-100 transition duration-300 cursor-pointer">
          <List className="mr-4 h-6 w-6 text-red-600" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">
              All Task History
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
