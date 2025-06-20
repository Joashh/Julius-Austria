'use client';
import { useEffect, useContext } from 'react';
import { themecontext } from '@/app/themecontext';

export default function ThemeSetter() {
  const { theme } = useContext(themecontext);

  useEffect(() => {
    // Set data-theme on <html> tag
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme || "light");
    }
  }, [theme]);

  return null;
}
