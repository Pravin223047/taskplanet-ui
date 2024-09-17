"use client";
import { DollarSign, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
import { LuShare2 } from "react-icons/lu";

const Options = () => {
  const router = useRouter();
  return (
    <div className="health-container mt-2 flex flex-col items-center md:flex-row w-full justify-between gap-4 h-full py-4">
      {/* Wallet */}
      <div
        className="health-item flex items-center p-4 border-2 border-neutral-300 w-full h-20 bg-neutral-50 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        onClick={() => router.push("https://taskplanet.org/home/wallet")}
      >
        <Wallet className="text-yellow-600 h-12 w-12 flex items-center justify-center p-2 text-3xl bg-white rounded-full" />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-800">Wallets</h2>
          <p className="flex items-center text-yellow-600 font-medium">₹0</p>
        </div>
      </div>

      {/* Earning */}
      <div
        className="health-item flex items-center p-4 border-2 border-neutral-300 w-full h-20 bg-neutral-50 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        onClick={() => router.push("/earnings")}
      >
        <DollarSign className="text-green-500 h-12 w-12 flex items-center justify-center p-2 text-3xl bg-white rounded-full" />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-800">Earning</h2>
          <p className="flex items-center text-green-600 font-medium cursor-pointer">
            ₹0
          </p>
        </div>
      </div>

      {/* Referrals */}
      <div
        className="health-item flex items-center p-4 border-2 border-neutral-300 w-full h-20 bg-neutral-50 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        onClick={() => router.push("https://taskplanet.org/home/referral")}
      >
        <LuShare2 className="text-blue-500 h-12 w-12 flex items-center justify-center p-2 text-3xl bg-white rounded-full" />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-800">Referrals</h2>
          <p className="flex items-center text-blue-600 font-medium cursor-pointer">
            0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Options;
