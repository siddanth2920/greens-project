import React from 'react';
import { Section } from '../types';

export const buttons: Array<{ label: string; key: Section }> = [
  { label: "Home", key: "hero" },
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
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <h1 className="text-2xl font-bold text-green-600">The Greens</h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            {buttons.map((b) => (
              <button
                key={b.key}
                onClick={() => onNavigate(b.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition
                  ${currentSection === b.key 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-700 hover:bg-green-100'
                  }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t p-3 flex flex-col space-y-2">
          {buttons.map((b) => (
            <button
              key={b.key}
              onClick={() => { onNavigate(b.key); setOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition
                ${currentSection === b.key 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-700 hover:bg-green-100'
                }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// export default function Navbar({ onNavigate, currentSection }: NavbarProps) {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 shadow-md">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-green-600">The Greens</h1>
//           </div>
//           <div className="hidden md:block">
//             <div className="flex space-x-4">
//               {buttons.map((b) => (
//                 <button
//                   key={b.key}
//                   onClick={() => onNavigate(b.key)}
//                   className={`px-3 py-2 rounded-md text-sm font-medium transition
//                     ${currentSection === b.key 
//                       ? 'bg-green-600 text-white' 
//                       : 'text-gray-700 hover:bg-green-100'
//                     }`}
//                 >
//                   {b.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }