"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { database } from "@/app/firebase";
import { ref, runTransaction } from "firebase/database";

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const incrementVisits = () => {
      try {
        const visitsRef = ref(database, "visits");
        runTransaction(visitsRef, (current) => (current || 0) + 1);
      } catch (error) {
        console.error("Firebase visit increment failed:", error);
      }
    };

    incrementVisits();
  }, [pathname]);

  return null;
}
