"use client"; // MUST be at the top

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { database } from "@/app/firebase"; // path to your firebase.js
import { ref, runTransaction } from "firebase/database";

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const incrementVisits = () => {
      const visitsRef = ref(database, "visits");
      runTransaction(visitsRef, (current) => (current || 0) + 1);
      console.log("Visitor added");
    };

    incrementVisits();
  }, [pathname]);

  return null; // no UI needed
}
