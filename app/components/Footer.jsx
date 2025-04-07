"use client";
import { useState, useEffect } from 'react';
import { FaGitlab } from 'react-icons/fa'; // npm install react-icons si pas déjà

export default function Footer() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    function handleMouseMove(e) {
      const windowHeight = window.innerHeight;
      const distanceFromBottom = windowHeight - e.clientY;
      setExpanded(distanceFromBottom <= 250);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const footerHeight = expanded ? 'h-[130px]' : 'h-[80px]';

  return (
    <footer
      className={`
        fixed bottom-0 left-0 w-full
        bg-black text-white border-t border-white
        transition-all duration-300 z-50
        px-8 ${footerHeight}
      `}
    >
      {expanded ? (
        // 🟢 MODE EXPAND
        <div className="flex justify-between items-center h-full">
          {/* Left: GitLab icon & link */}
          <a
            href="https://gitlab.com/danial155740/Malik"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white"
          >
            <FaGitlab className="text-2xl" />
            <span className="hidden sm:inline text-l">GitLab</span>
          </a>

          {/* Center: Email */}
          <div className="text-sm sm:text-base">
          danialmalik956@gmail.com     
          <a target='_blank' href="https://www.linkedin.com/in/danial-malik-44b547232/"> / Mon LinkedIn</a>     
          </div>

          {/* Right: Trademark */}
          <div className="text-s sm:text-sm text-right">
            © Malik Danial 2025
          </div>
        </div>
      ) : (
        // 🔵 MODE COMPACT
        <div className="flex justify-center items-center h-full">
          <div className="text-lg sm:text-xl font-semibold">
            Prendre contact
          </div>
        </div>
      )}
    </footer>
  );
}
