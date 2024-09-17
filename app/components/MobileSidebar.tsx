"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import useClient from "@/hook/useClient";
import SideBar from "./Sidebar";

const MobileSideBar = () => {
  const { isMounted } = useClient();

  if (!isMounted) return null;

  return (
    <Sheet>
      {/* Ensure that SheetTrigger does not create another <button> */}
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0">
        <DialogTitle asChild>
          <VisuallyHidden>Mobile Sidebar</VisuallyHidden>
        </DialogTitle>
        <DialogDescription asChild>
          <VisuallyHidden>This is the mobile sidebar content.</VisuallyHidden>
        </DialogDescription>

        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
