"use client";

import { useState } from "react";
import EarningsComponent from "@/app/components/EarningsComponent";
import UserList from "./UserList";
import { useUser } from "@clerk/nextjs";
const EarningsPage = () => {
  const user = useUser();

  // Sample user data
  const users = [
    {
      id: "1",
      name: `${user.user?.fullName}`,
      email: `${user.user?.emailAddresses[0].emailAddress}`,
      avatar: `${user.user?.imageUrl}`,
      totalEarnings: 1000.0,
      selfEarnings: 500.0,
      referralEarnings: 200.0,
      rewardEarnings: 300.0,
      serialNumber: "TP001", // Example serial number
      kycProvided: true, // Example KYC status
      isPremium: true, // Example premium status
    },
    {
      id: "2",
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1500.0,
      selfEarnings: 700.0,
      referralEarnings: 400.0,
      rewardEarnings: 400.0,
      serialNumber: "TP002",
      kycProvided: false,
      isPremium: false,
    },
    {
      id: "3",
      name: "Carol Williams",
      email: "carol.williams@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1200.0,
      selfEarnings: 600.0,
      referralEarnings: 300.0,
      rewardEarnings: 300.0,
      serialNumber: "TP003",
      kycProvided: true,
      isPremium: true,
    },
    {
      id: "4",
      name: "David Brown",
      email: "david.brown@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1800.0,
      selfEarnings: 800.0,
      referralEarnings: 500.0,
      rewardEarnings: 500.0,
      serialNumber: "TP004",
      kycProvided: true,
      isPremium: false,
    },
    {
      id: "5",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 950.0,
      selfEarnings: 400.0,
      referralEarnings: 250.0,
      rewardEarnings: 300.0,
      serialNumber: "TP005",
      kycProvided: false,
      isPremium: true,
    },
    {
      id: "6",
      name: "Frank Miller",
      email: "frank.miller@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1400.0,
      selfEarnings: 700.0,
      referralEarnings: 350.0,
      rewardEarnings: 350.0,
      serialNumber: "TP006",
      kycProvided: true,
      isPremium: false,
    },
    {
      id: "7",
      name: "Grace Wilson",
      email: "grace.wilson@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1600.0,
      selfEarnings: 750.0,
      referralEarnings: 400.0,
      rewardEarnings: 450.0,
      serialNumber: "TP007",
      kycProvided: false,
      isPremium: true,
    },
    {
      id: "8",
      name: "Henry Moore",
      email: "henry.moore@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1300.0,
      selfEarnings: 650.0,
      referralEarnings: 300.0,
      rewardEarnings: 350.0,
      serialNumber: "TP008",
      kycProvided: true,
      isPremium: false,
    },
    {
      id: "9",
      name: "Ivy Taylor",
      email: "ivy.taylor@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1100.0,
      selfEarnings: 500.0,
      referralEarnings: 250.0,
      rewardEarnings: 350.0,
      serialNumber: "TP009",
      kycProvided: false,
      isPremium: true,
    },
    {
      id: "10",
      name: "Jack Anderson",
      email: "jack.anderson@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1700.0,
      selfEarnings: 800.0,
      referralEarnings: 400.0,
      rewardEarnings: 500.0,
      serialNumber: "TP010",
      kycProvided: true,
      isPremium: true,
    },
    {
      id: "11",
      name: "Kara Thomas",
      email: "kara.thomas@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1250.0,
      selfEarnings: 550.0,
      referralEarnings: 300.0,
      rewardEarnings: 400.0,
      serialNumber: "TP011",
      kycProvided: true,
      isPremium: false,
    },
    {
      id: "12",
      name: "Liam Jackson",
      email: "liam.jackson@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1450.0,
      selfEarnings: 700.0,
      referralEarnings: 350.0,
      rewardEarnings: 400.0,
      serialNumber: "TP012",
      kycProvided: false,
      isPremium: true,
    },
    {
      id: "13",
      name: "Mia White",
      email: "mia.white@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1550.0,
      selfEarnings: 750.0,
      referralEarnings: 400.0,
      rewardEarnings: 400.0,
      serialNumber: "TP013",
      kycProvided: true,
      isPremium: true,
    },
    {
      id: "14",
      name: "Noah Harris",
      email: "noah.harris@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1350.0,
      selfEarnings: 650.0,
      referralEarnings: 300.0,
      rewardEarnings: 400.0,
      serialNumber: "TP014",
      kycProvided: true,
      isPremium: false,
    },
    {
      id: "15",
      name: "Olivia Martin",
      email: "olivia.martin@example.com",
      avatar: "/taskplanetwebp.webp",
      totalEarnings: 1250.0,
      selfEarnings: 600.0,
      referralEarnings: 300.0,
      rewardEarnings: 350.0,
      serialNumber: "TP015",
      kycProvided: false,
      isPremium: true,
    },
  ];

  // State to hold the selected user's details and earnings
  const [selectedUser, setSelectedUser] = useState({
    userDetails: {
      name: "",
      email: "",
      avatar: "",
      serialNumber: "",
      kycProvided: false,
      isPremium: false,
    },
    totalEarnings: 0,
    selfEarnings: 0,
    referralEarnings: 0,
    rewardEarnings: 0,
  });

  // Function to handle user selection from UserList
  const handleUserSelect = (userData: {
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
  }) => {
    setSelectedUser(userData); // Set the selected user's details and earnings
  };

  return (
    <>
      {/* Pass the selected user's earnings and details to EarningsComponent */}
      <EarningsComponent
        totalEarnings={selectedUser.totalEarnings}
        selfEarnings={selectedUser.selfEarnings}
        referralEarnings={selectedUser.referralEarnings}
        rewardEarnings={selectedUser.rewardEarnings}
        userDetails={selectedUser.userDetails} // Now passing the nested userDetails object
      />

      {/* Pass the handleUserSelect function to UserList */}
      <UserList users={users} onUserSelect={handleUserSelect} />
    </>
  );
};

export default EarningsPage;
