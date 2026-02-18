import '../styles/globals.css' // if you have global CSS
import { useEffect } from "react";
import { useRouter } from "next/router";
import { database } from "../firebase";
import { ref, runTransaction } from "firebase/database";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const incrementVisits = () => {
      const visitsRef = ref(database, "visits");
      runTransaction(visitsRef, (current) => (current || 0) + 1);
    };

    incrementVisits();

    router.events.on("routeChangeComplete", incrementVisits);
    return () => {
      router.events.off("routeChangeComplete", incrementVisits);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
