// HeroSection.tsx
import heroImg from "../../assets/villa.jpg";
import { buttons } from "../Navbar";

type Props = {
  onNavigate: (val: any) => void;
};

export default function HeroSection({ onNavigate }: Props) {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: heroImg ? `url(${heroImg})` : 'none' }}
    >
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">The Greens</h1>
        <p className="text-lg mt-4 mb-10">Where nature whispers and luxury listens — your green villa escape, far from the city’s rush.</p>
        <div className="flex flex-wrap gap-4 justify-center max-w-3xl">
          {buttons.filter(b => b.label !== 'Home').map(b => (
            <button
              key={b.key}
              onClick={() => onNavigate(b.key)}
              className="w-[120px] h-[120px] rounded-full bg-white/60 text-black flex items-center justify-center text-sm hover:bg-white transition"
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
