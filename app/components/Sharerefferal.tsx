"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  FaCheck,
  FaCopy,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useOrigin } from "@/hook/useOrigin";
import { Diamond, Users } from "lucide-react";
import PremiumModal from "./PremiumModal";
import { useRouter } from "next/navigation";

interface ReferModalProps {
  isOpen: boolean;
  onClose: () => void;
  referralLink: string;
  handleCopy: () => void;
  isCopied: boolean;
}

const ReferModal: React.FC<ReferModalProps> = ({
  isOpen,
  onClose,
  referralLink,
  handleCopy,
  isCopied,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-xl text-left w-[32rem] max-w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-rose-500 hover:text-rose-700 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Your Referral Link
        </h2>
        <p className="text-gray-600 mb-6">Share the link below:</p>
        <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center border border-gray-200">
          <p className="text-blue-600 font-bold truncate">{referralLink}</p>
          <button
            onClick={handleCopy}
            className="ml-4 text-blue-600 hover:text-blue-700 transition duration-200"
            title={isCopied ? "Link Copied!" : "Copy Link"}
          >
            {isCopied ? <FaCheck size={24} /> : <FaCopy size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

const ReferComponent = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referralLink, setReferralLink] = useState<string>("");
  const localorigin = useOrigin();
  const router = useRouter();

  useEffect(() => {
    const generatedLink = `${localorigin}/referral/${Math.floor(
      Math.random() * 1000000
    )}`;
    setReferralLink(generatedLink);
  }, [localorigin]);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied!");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
      setIsModalOpen(false); // Close modal after copying
    }, 1000); // Delay closing for a smoother experience
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 gap-6 space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 text-center">
        Share Your Referral Link
      </h3>

      <div className="flex justify-around">
        {/* Copy Link */}
        <button
          onClick={openModal}
          className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out"
          title="Copy your referral link"
        >
          {isCopied ? (
            <FaCheck size={36} className="mb-1 rounded-full bg-slate-100 p-1" />
          ) : (
            <FaCopy size={36} className="mb-1 rounded-full bg-slate-100 p-1" />
          )}
          <span className="text-sm font-medium">Copy Link</span>
        </button>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(referralLink)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-green-600 hover:text-green-700 transition duration-200 ease-in-out"
          title="Share on WhatsApp"
        >
          <FaWhatsapp
            size={36}
            className="mb-1 rounded-full bg-slate-100 p-1"
          />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            referralLink
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-blue-800 hover:text-blue-900 transition duration-200 ease-in-out"
          title="Share on Facebook"
        >
          <FaFacebook
            size={36}
            className="mb-1 rounded-full bg-slate-100 p-1"
          />
          <span className="text-sm font-medium">Facebook</span>
        </a>

        {/* Telegram */}
        <a
          href={`https://t.me/share/url?url=${encodeURIComponent(
            referralLink
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-blue-500 hover:text-blue-600 transition duration-200 ease-in-out"
          title="Share on Telegram"
        >
          <FaTelegram
            size={36}
            className="mb-1 rounded-full bg-slate-100 p-1"
          />
          <span className="text-sm font-medium">Telegram</span>
        </a>
      </div>

      <div className="flex items-center flex-col md:flex-row justify-center gap-4 md:gap-8 my-8">
        <Button
          className="flex items-center gap-2 w-full text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-2 transition duration-150 ease-in-out"
          variant={"premium"}
          onClick={() => setIsPremiumModalOpen(true)}
        >
          <Diamond className="w-5 h-5 text-white" />
          <span className="text-sm font-semibold">Premium Membership</span>
        </Button>
        <Button
          className="flex items-center gap-2 w-full bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg px-4 py-2 transition duration-150 ease-in-out"
          onClick={() => router.push("https://taskplanet.org/home/my-leads")}
        >
          <Users className="w-5 h-5 text-white" />
          <span className="text-sm font-semibold">My Leads</span>
        </Button>
      </div>

      {/* Modal */}
      <ReferModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        referralLink={referralLink}
        handleCopy={handleCopy}
        isCopied={isCopied}
      />

      <PremiumModal
        isOpen={isPremiumModalOpen}
        onClose={() => setIsPremiumModalOpen(false)}
      />
    </div>
  );
};

export default ReferComponent;
