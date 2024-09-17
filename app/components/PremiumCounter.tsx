"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap, Diamond } from "lucide-react";
import PremiumModal from "./PremiumModal";

const PremiumCounter = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const MAX_FREE_COUNTS = 5;

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <div className="px-3">
      <Card className="bg-gradient-to-r bg-slate-700  border-0 rounded-lg shadow-lg">
        <CardContent className="py-6 px-8">
          <div className="text-center text-white mb-4 space-y-2">
            {/* Title */}
            <h2 className="text-md font-semibold flex items-center w-full justify-around gap-4">
              <Diamond className="w-4 h-4 text-yellow-400" />
              <span>Premium Membership</span>
            </h2>
            <p className="text-sm">
              {2} / {MAX_FREE_COUNTS} Free Referrals
            </p>
            {/* Progress Bar */}
            <Progress
              className="h-3 bg-gray-200"
              value={(2 / MAX_FREE_COUNTS) * 100}
            />
          </div>
          {/* Upgrade Button */}
          <Button
            className="w-full"
            variant="premium"
            onClick={() => setIsOpen(true)}
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
      <PremiumModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default PremiumCounter;
