"use client";
import { useState, useEffect } from 'react';
import AnaglyphText from './AnaglyphText';

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    function handleMouseMove(e) {
      setExpanded(e.clientY <= 250);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Experience', href: '/experience' },
    {
      label: 'Veille Technologique',
      href: '/VEILLE_MALIK.pdf', 
      download: true // <= on indique qu'on veut télécharger
    },
  ];
  

  const navHeight = expanded ? 'h-[180px]' : 'h-[100px]';

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full
        bg-black text-white border-b border-white
        transition-all duration-300 z-50
        px-8 ${navHeight}
      `}
    >
      {expanded ? (
        // 🟢 MODE EXPAND : nom à gauche + liens à droite
        <div className="flex justify-between items-center h-full">
          <div className='scale-[200%] ml-12'>
          <AnaglyphText>
            MALIK
          </AnaglyphText>
          </div>
          <div className="flex gap-6 mr-4">
          {links.map((link) => (
            <AnaglyphText
              key={link.href}
              href={link.href}
              download={link.download}  // <= on passe la prop au composant
            >
              <span className="text-lg sm:text-xl font-semibold">
                {link.label}
              </span>
            </AnaglyphText>
          ))}

          </div>
        </div>
      ) : (
        // 🔵 MODE COMPACT : nom centré sans rien d’autre dans la ligne
        <div className="flex justify-center items-center h-full">
          <div className="text-2xl sm:text-3xl font-bold">
            MALIK Danial
          </div>
        </div>
      )}
    </nav>
  );
}
