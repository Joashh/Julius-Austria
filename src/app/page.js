'use client';

import Home2 from "./home2";
import './app.css';
import {  useContext } from "react";
import { themecontext } from "@/app/themecontext";

export default function Home() {
  const {theme} = useContext(themecontext);
  return (
    <div data-theme={theme || "light"}><Home2/></div>
  
  );
}
