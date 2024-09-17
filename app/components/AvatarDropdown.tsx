"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  Phone,
  MessageSquare,
  Settings,
  LogOut,
  List,
  Gift,
} from "lucide-react";
import { useRouter } from "next/navigation";

const AvatarDropdown = () => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-8 h-8 rounded-full bg-gray-100 cursor-pointer">
          <AvatarImage src="/avatar.webp" alt="User Avatar" />
          <AvatarFallback>PM</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* Profile with inactive badge */}
          <DropdownMenuItem
            onClick={() =>
              router.push("https://taskplanet.org/home/my-profile")
            }
          >
            <User className="mr-2 h-4 w-4" />
            <span>My Profile</span>
            <span className="ml-auto text-xs text-gray-500">Inactive</span>
          </DropdownMenuItem>

          {/* TripleWSOLS3W (Sponsor) */}
          <DropdownMenuItem>
            <Gift className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span>TripleWSOLS3W</span>
              <span className="text-sm">sponsor</span>
            </div>
          </DropdownMenuItem>

          {/* Phone Number */}
          <DropdownMenuItem>
            <Phone className="mr-2 h-4 w-4" />
            <span>+91 1234567890</span>
          </DropdownMenuItem>

          {/* WhatsApp Number */}
          <DropdownMenuItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>+91 9876543210</span>
          </DropdownMenuItem>

          {/* Leaderboard */}
          <DropdownMenuItem
            onClick={() =>
              router.push("https://taskplanet.org/home/leader-board")
            }
          >
            <List className="mr-2 h-4 w-4" />
            <span>Leaderboard</span>
          </DropdownMenuItem>

          {/* Task History */}
          <DropdownMenuItem>
            <List className="mr-2 h-4 w-4" />
            <span>All Task History</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
