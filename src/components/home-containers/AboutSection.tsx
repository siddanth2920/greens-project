// AboutSection.tsx
import "./AboutSection.css";
type Props = { onBack: () => void };

export default function AboutSection({onBack}: Props) {
  return (
       <section className="h-[100vh] py-20 bg-fixed bg-content bg-center text-white about-section">
            <button
        onClick={onBack}
        className="absolute top-5 left-5 bg-white/80 text-black px-4 py-2 rounded-full text-sm"
      >
        Back
      </button>
      <div className="max-w-4xl mx-auto text-center bg-black/50 p-10 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">About the Project</h2>
        <p>
          This premium construction project redefines luxury and comfort with
          modern architecture and sustainable design.
        </p>
      </div>
    </section>
  );
}
