// AboutSection.tsx
import "./AboutSection.css";

export default function AboutSection() {
  return (
       <section className="py-20 bg-fixed bg-cover bg-center text-white about-section">
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
