"use client";

import { useEffect } from "react";

export default function ForceReloadOnClient() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Run only if user landed here via client navigation
      const hasReloaded = sessionStorage.getItem("reloaded-event-detail");

      if (!hasReloaded) {
        sessionStorage.setItem("reloaded-event-detail", "true");
        location.reload();
      } else {
        sessionStorage.removeItem("reloaded-event-detail");
      }
    }
  }, []);

  return null;
}
