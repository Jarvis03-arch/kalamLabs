"use client";

import { useEffect, useState } from "react";
import { ScrollPerformanceMonitor } from "@/lib/scroll-performance";

interface ScrollPerformanceProps {
  children: React.ReactNode;
  showFPS?: boolean;
}

export default function ScrollPerformance({
  children,
  showFPS = false,
}: ScrollPerformanceProps) {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    if (showFPS && process.env.NODE_ENV === "development") {
      const monitor = new ScrollPerformanceMonitor();
      monitor.startMonitoring();

      const interval = setInterval(() => {
        setFps(monitor.getCurrentFPS());
      }, 1000);

      return () => {
        monitor.stopMonitoring();
        clearInterval(interval);
      };
    }
  }, [showFPS]);

  return (
    <>
      {children}
      {showFPS && process.env.NODE_ENV === "development" && (
        <div className="fixed top-4 right-4 z-50 bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-mono">
          FPS: {fps}
        </div>
      )}
    </>
  );
}
