// HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/images/hero.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">The Greens</h1>
        <p className="text-lg mt-4">Building Dreams. Crafting Reality.</p>
      </div>
    </section>
  );
}
