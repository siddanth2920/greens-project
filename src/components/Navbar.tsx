import React from 'react';
import { Section } from '../types';

export const buttons: Array<{ label: string; key: Section }> = [
  { label: "About", key: "about" },
  { label: "Master Plan", key: "master" },
  { label: "Floor Plans", key: "floor" },
  { label: "Ameneties", key: "ameneties" },
  { label: "Location", key: "location" },
  { label: "Contact", key: "contact" }
];

type NavbarProps = {
  onNavigate: (val: Section) => void;
  currentSection: Section;
};

export default function Navbar({ onNavigate, currentSection }: NavbarProps) {
  return (
    <nav className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {buttons.map((b) => (
          <button
            key={b.key}
            onClick={() => onNavigate(b.key)}
            className={`w-[80px] h-[80px] rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 shadow-lg hover:scale-110
              ${currentSection === b.key 
                ? 'bg-green-600 text-white' 
                : 'bg-white/90 text-gray-700 hover:bg-green-100'
              }`}
          >
            {b.label}
          </button>
        ))}
      </div>
    </nav>
  );
}