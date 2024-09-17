"use client";
import ProfilePopup from "@/app/modals/ProfilePopup";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";

interface CountdownTimerProps {
  endTime: Date;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

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

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = endTime.getTime() - new Date().getTime();
    let timeLeft: TimeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const timeComponents =
    timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
      <div className="flex items-center justify-center space-x-3">
        {["hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="flex items-center space-x-1">
              <span className="text-blue-600 text-2xl font-bold">
                {String(timeLeft[unit as keyof TimeLeft]).padStart(2, "0")}
              </span>
            </div>
            <span className="text-gray-600 text-xs capitalize">{unit}</span>
          </div>
        ))}
      </div>
    ) : (
      <span className="text-red-600 text-lg font-semibold">Expired</span>
    );

  return (
    <div className="bg-white p-4 rounded-lg w-full shadow-md border border-gray-200">
      <div className="text-gray-700 text-lg font-medium">Time Remaining:</div>
      <div className=" w-full flex items-center justify-center gap-4">
        {timeComponents}
      </div>
    </div>
  );
};

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const { user } = useUser();
  const { toast } = useToast();

  const players: Player[] = [
    {
      name: "JAGA",
      points: 71,
      prize: "₹10",
      rank: 1,
      avatar: "/taskplanetwebp.webp",
      bgColor: "bg-red-100",
      location: "Location A",
      memberSince: "January 2022",
      dailyPoints: 5,
      weeklyPoints: 35,
      monthlyPoints: 150,
    },
    {
      name: "Prahallad",
      points: 49,
      prize: "₹8",
      rank: 2,
      avatar: "/taskplanetwebp.webp",
      bgColor: "bg-blue-100",
      location: "Location B",
      memberSince: "March 2023",
      dailyPoints: 4,
      weeklyPoints: 28,
      monthlyPoints: 120,
    },
    {
      name: "Krupasindh",
      points: 49,
      prize: "₹7",
      rank: 3,
      avatar: "/taskplanetwebp.webp",
      bgColor: "bg-yellow-100",
      location: "Location C",
      memberSince: "February 2023",
      dailyPoints: 6,
      weeklyPoints: 30,
      monthlyPoints: 130,
    },
    {
      name: "Karan",
      points: 42,
      prize: "₹6",
      rank: 4,
      avatar: "/taskplanetwebp.webp",
      bgColor: "bg-pink-100",
      location: "Location D",
      memberSince: "April 2022",
      dailyPoints: 3,
      weeklyPoints: 22,
      monthlyPoints: 100,
    },
    {
      name: "Pravin",
      points: 40,
      prize: "₹5",
      rank: 5,
      isCurrentUser: true,
      avatar: user?.imageUrl || "/taskplanetwebp.webp",
      bgColor: "bg-purple-100",
      location: "Solapur, India",
      memberSince: "August 2024",
      dailyPoints: 7,
      weeklyPoints: 32,
      monthlyPoints: 110,
    },
  ];

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const currentUser = players.find((p) => p.isCurrentUser);
  const endTime = new Date(new Date().getTime() + 14 * 60 * 60 * 1000);

  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleClosePopup = () => {
    setSelectedPlayer(null);
  };

  const handleclaimprize = () => {
    toast({
      title: "Claim Prize Button",
      description: "Functionality not be implemented yet",
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 h-full w-full flex flex-col xl:flex-row p-2 px-4 gap-4">
      {/* Leaderboard Container */}
      <div className="w-full bg-white border border-gray-300 shadow-lg rounded-lg p-6 relative transition-all">
        {/* Leaderboard Header */}
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center border border-orange-600 p-2 w-fit rounded-full space-x-2 mb-6 bg-gradient-to-r from-rose-200 to-rose-300">
            <FaCrown className="text-orange-500 text-2xl" />
            <h1 className="text-3xl font-extrabold text-gray-800">
              Leaderboard
            </h1>
            <FaCrown className="text-orange-500 text-2xl" />
          </div>
        </div>

        {/* Tabs for Daily, Weekly, Monthly */}
        <div className="flex flex-col w-full gap-4 xl:flex-row justify-between items-center mb-6">
          <div className="flex  space-x-4">
            {["daily", "weekly", "monthly"].map((tab) => (
              <button
                key={tab}
                className={`${
                  activeTab === tab
                    ? "bg-gradient-to-r from-orange-400 to-orange-600"
                    : "bg-gray-300"
                } text-white px-4 py-2 rounded-md transition-all transform hover:scale-105`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="w-full flex items-center justify-center text-center xl:w-56">
            <CountdownTimer endTime={endTime} />
          </div>
        </div>

        <div className="w-full flex flex-col items-center mb-8">
          <div className="flex flex-col md:flex-row justify-center max-w-3xl w-full items-start md:items-end space-y-4 md:space-y-0 md:space-x-4">
            <div
              className={`flex flex-col w-full md:w-1/3 items-center space-y-2 ${players[1].bgColor} p-4 rounded-lg shadow-md transform hover:scale-105 transition`}
              onClick={() => handlePlayerClick(players[1])}
            >
              <img
                src={
                  players[1].avatar || "https://clerk.dev/default-avatar.png"
                }
                alt={players[1].name}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-gray-300"
              />
              <div className="text-center">
                <span className="text-sm md:text-lg font-bold">
                  {players[1].name}
                </span>
                <div className="text-xs md:text-sm text-rose-700">
                  Rank: {players[1].rank} | {players[1].points} pts
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col w-full md:w-1/3 items-center space-y-2 ${players[0].bgColor} p-4 rounded-lg shadow-md transform hover:scale-105 transition`}
              onClick={() => handlePlayerClick(players[0])}
            >
              <FaCrown className="text-orange-400 text-4xl md:text-5xl" />
              <img
                src={
                  players[0].avatar || "https://clerk.dev/default-avatar.png"
                }
                alt={players[0].name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-yellow-500"
              />
              <div className="text-center">
                <span className="text-sm md:text-lg font-bold">
                  {players[0].name}
                </span>
                <div className="text-xs md:text-sm text-purple-700">
                  Rank: {players[0].rank} | {players[0].points} pts
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col w-full md:w-1/3 items-center space-y-2 ${players[2].bgColor} p-4 rounded-lg shadow-md transform hover:scale-105 transition`}
              onClick={() => handlePlayerClick(players[2])}
            >
              <img
                src={
                  players[2].avatar || "https://clerk.dev/default-avatar.png"
                }
                alt={players[2].name}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-gray-300"
              />
              <div className="text-center">
                <span className="text-sm md:text-lg font-bold">
                  {players[2].name}
                </span>
                <div className="text-xs md:text-sm text-blue-700">
                  Rank: {players[2].rank} | {players[2].points} pts
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="px-4 py-2 w-24">Rank</th>
                <th className="px-4 py-2 min-w-56 max-w-full">Player</th>
                <th className="px-4 py-2 w-32">Points</th>
                <th className="px-4 py-2 w-32">Prize</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr
                  key={index}
                  onClick={() => handlePlayerClick(player)}
                  className={`${
                    player.isCurrentUser ? "bg-green-100" : `${player.bgColor}`
                  } transition-all hover:bg-gray-100`}
                >
                  <td className="border px-4 py-2">{player.rank}</td>
                  <td className="border px-4 py-2 flex items-center space-x-2">
                    <img
                      src={player.avatar || "/taskplanetwebp.webp"}
                      alt={player.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{player.name}</span>
                  </td>
                  <td className="border px-4 py-2">{player.points}</td>
                  <td className="border px-4 py-2">{player.prize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPlayer && (
        <ProfilePopup player={selectedPlayer} onClose={handleClosePopup} />
      )}

      {/* Sidebar for Current User */}
      {currentUser && (
        <div className="w-full xl:w-72 h-full bg-gradient-to-r from-pink-100 to-yellow-100 shadow-xl rounded-lg p-6 flex flex-col items-center space-y-4">
          <div className="relative">
            <img
              src={currentUser.avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg"
            />
            <div className="absolute top-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>{" "}
          </div>

          <h3 className="text-2xl font-bold text-blue-800">
            {user?.fullName || "User"}
          </h3>
          <p className="text-sm text-gray-600">Current Leaderboard Stats</p>

          <div className="flex justify-between w-full px-6 text-gray-800">
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-green-600">
                {currentUser.points}
              </span>
              <span className="text-sm text-gray-500">Points</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-yellow-600">
                {currentUser.rank}
              </span>
              <span className="text-sm text-gray-500">Rank</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-red-600">
                {currentUser.prize}
              </span>
              <span className="text-sm text-gray-500">Prize</span>
            </div>
          </div>

          <Button
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-md w-full shadow-lg transition-all"
            onClick={handleclaimprize}
          >
            Claim Prize
          </Button>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
