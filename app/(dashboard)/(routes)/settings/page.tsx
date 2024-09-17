"use client";
import PremiumModal from "@/app/components/PremiumModal";
import { Button } from "@/components/ui/button";
import { Diamond, Settings } from "lucide-react";
import { useState } from "react";

const SettingsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={"p-2 w-fit rounded-md bg-gray-700/10"}>
          <Settings className={"w-10 h-10 text-gray-700"} />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Settings</h2>
          <p className="text-sm text-muted-foreground">
            Manage account settings.
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          You are currently on a {false ? "Premium" : "Free"} plan
        </div>

        <Button
          className="flex items-center gap-2 w-fit text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-2 transition duration-150 ease-in-out"
          variant={"premium"}
          onClick={() => setIsModalOpen(true)}
        >
          <Diamond className="w-5 h-5 text-white" />
          <span className="text-sm font-semibold">Premium Membership</span>
        </Button>
      </div>
      <PremiumModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SettingsPage;
