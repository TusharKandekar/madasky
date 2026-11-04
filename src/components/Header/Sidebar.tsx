"use client";

import { useState } from "react";
import HamburgerIcon from "@/components/Header/HamburgerIcon";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={sidebarOpen}
        onClick={() => setSidebarOpen(true)}
        className="flex h-full w-12 shrink-0 cursor-pointer items-center justify-center xl:hidden"
      >
        <HamburgerIcon />
      </button>

      {sidebarOpen && <SidebarContent onClose={() => setSidebarOpen(false)} />}
    </>
  );
}
