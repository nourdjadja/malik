"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function AnaglyphText({ children, href }) {
  const [shadow, setShadow] = useState('0 0 0 #FC05CF, 0 0 0 #64E9EE');

  useEffect(() => {
    const interval = setInterval(() => {
      // Génère des offsets aléatoires pour l’effet anaglyphe
      const offsetX1 = randomBetween(-3, 4);
      const offsetY1 = randomBetween(-3, 4);
      const offsetX2 = randomBetween(-3, 4);
      const offsetY2 = randomBetween(-3, 4);

      setShadow(`
        ${offsetX1}px ${offsetY1}px 0 #FC05CF,
        ${offsetX2}px ${offsetY2}px 0 #64E9EE
      `);
    }, 100); // rafraîchit tous les 100 ms

    return () => clearInterval(interval);
  }, []);

  // Styles pour la police + l’anaglyphe
  const anaglyphStyle = {
    fontFamily: 'PlatinumSignUnder, sans-serif',
    color: '#fff',
    textShadow: shadow,
  };

  // Si on reçoit une prop "href", on enveloppe le texte dans un <Link> cliquable
  if (href) {
    // Avec Next.js 13 App Router, on peut envelopper <span> ou <a>
    return (
      <Link href={href}>
        <span style={anaglyphStyle}>
          {children}
        </span>
      </Link>
    );
  }

  // Sinon, c’est juste un texte (non cliquable)
  return (
    <span style={anaglyphStyle}>
      {children}
    </span>
  );
}
