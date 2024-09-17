"use client";
import { FC, useEffect, useState } from "react";
import { GiftIcon, HomeIcon, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AvatarDropdown from "./AvatarDropdown";
import { useRouter } from "next/navigation";

const Header: FC = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState(0);
  const router = useRouter();

  // Toggle between gift icon and balance every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBalance((prevState) => !prevState);
      setBalance(1000); // Update balance to 1000 after 2 seconds
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="p-2 flex flex-col space-y-4">
      {/* Upper header section with home icon, badges, and avatar */}
      <div className="flex flex-row justify-between items-center">
        {/* Home icon and title */}
        <div className="flex items-center space-x-2">
          <HomeIcon className="w-5 h-5 text-blue-800" />
          <h1 className="text-lg font-semibold text-blue-900 hidden md:flex">
            Home
          </h1>
        </div>

        {/* Badges for wallet, earnings, referrals */}
        <div className="flex items-center space-x-4 ">
          <Badge
            variant="outline"
            className="text-xs font-medium p-2 rounded-md gap-2 flex items-center cursor-pointer"
            title="All Points History"
            onClick={() =>
              router.push("https://taskplanet.org/home/all-point-history")
            }
          >
            <img
              id="rotating-gift"
              src="/giftopen.webp"
              alt="giftopen"
              className="w-5 h-5"
            />
            <p className="text-xs w-full text-center">10</p>
          </Badge>

          <Badge
            variant="outline"
            className="text-xs font-medium p-2 rounded-md bg-green-200 flex items-center justify-center cursor-pointer"
            title="Wallet"
            onClick={() => router.push("https://taskplanet.org/home/wallet")}
          >
            ₹0.00 {/* Placeholder for wallet balance */}
          </Badge>
          <Badge
            variant="outline"
            className="text-xs font-medium p-2 rounded-md flex items-center justify-center cursor-pointer"
            title="Invite & Earn"
            onClick={() => router.push("https://taskplanet.org/home/referral")}
          >
            {showBalance ? (
              <span>₹{balance}</span> // Show balance after 2 seconds
            ) : (
              <GiftIcon className="w-5 h-5" />
            )}
          </Badge>

          {/* Avatar */}
          <AvatarDropdown />
        </div>
      </div>

      {/* Moving text announcement with horn icon */}
      <div className="flex items-center justify-center space-x-2 bg-yellow-100 p-2 rounded-md shadow-md">
        <Volume2 className="w-6 h-6 text-yellow-500" />
        <div className="overflow-hidden w-full">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-xs text-gray-700 font-medium">
              Welcome to Taskpanet! Earn rewards for every successful referral.
              Get a chance to win up to ₹1000! Stay tuned for exciting offers
              and don't miss out on the special bonuses for new users. Join now
              and invite your friends to double your earnings!
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
