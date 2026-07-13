"use client";

import { useEffect, useState } from "react";

export default function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device capability to disable custom cursor on mobile/tablet
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkTouchDevice();

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Scale up cursor when hovering over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Global Ambient Background Spotlight */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998] transition-opacity duration-700 ease-out"
        style={{
          background: `radial-gradient(500px at ${position.x}px ${position.y}px, rgba(101, 203, 59, 0.03), transparent 80%)`,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* 2. Custom Cursor Outer Ring */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHovered ? "54px" : "28px",
          height: isHovered ? "54px" : "28px",
          backgroundColor: isHovered ? "rgba(101, 203, 59, 0.18)" : "rgba(101, 203, 59, 0.08)",
          border: isHovered ? "2px solid #65cb3b" : "1.5px solid rgba(101, 203, 59, 0.8)",
          boxShadow: isHovered 
            ? "0 0 25px rgba(101, 203, 59, 0.65)" 
            : "0 0 8px rgba(101, 203, 59, 0.2)",
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: "width 0.25s cubic-bezier(0.25, 1, 0.5, 1), height 0.25s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease-out, transform 0.08s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      />

      {/* 3. Custom Cursor Inner Active Dot */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: "#65cb3b",
          boxShadow: "0 0 6px rgba(101, 203, 59, 0.8)",
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: "transform 0.02s linear",
        }}
      />
    </>
  );
}
