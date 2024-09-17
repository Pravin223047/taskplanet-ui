"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useClient from "@/hook/useClient";
import { Loader, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import toast from "react-hot-toast";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ isOpen, onClose }) => {
  const { isMounted } = useClient();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!isMounted) return null;

  const onSubscribe = async () => {
    setLoading(true);
    // toast.success("Functionality not implemented yet!!!");
    router.push("https://taskplanet.org/home/premium");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="flex justify-center items-center flex-col gap-y-4 pb-2">
          <DialogTitle>
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to <span className="text-blue-500">TaskPlanet</span>
              <Badge className="uppercase text-sm py-1" variant="premium">
                Premium
              </Badge>
            </div>
          </DialogTitle>

          <DialogDescription className="text-left pt-2 space-y-2 text-zinc-900 text-md font-medium w-full">
            Elevate your experience with TaskPlanet Premium! Enjoy exclusive
            features, enhanced functionalities, and priority support to maximize
            your productivity. Upgrade today and unlock the full potential of
            TaskPlanet.
          </DialogDescription>

          <DialogFooter className="w-full">
            <Button
              size="lg"
              variant="premium"
              className="w-full"
              onClick={onSubscribe}
              disabled={loading}
            >
              {loading ? (
                <Loader className="w-4 h-4 ml-2 fill-white animate-spin" />
              ) : (
                <>
                  Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PremiumModal;
