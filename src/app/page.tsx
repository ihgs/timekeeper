"use client"
import { useEffect, useState } from "react";
import TimerGenerator from "./components/TimerGenerator";


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center  p-24">
      <TimerGenerator />
    </main>
  );
}
