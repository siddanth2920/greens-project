import img1 from "../../assets/masterplan.png";
type Props = { onBack: () => void };
export default function MasterPlan({ onBack }: Props) {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <button
        onClick={onBack}
        className="absolute top-5 left-5 bg-white/80 text-black px-4 py-2 rounded-full text-sm"
      >
        Back
      </button>
      <h2 className="text-3xl font-semibold mb-6">Master Plan</h2>
      <img
        src={img1}
        alt="Master Plan"
        className="max-w-4xl mx-auto rounded-lg shadow-lg"
      />
    </section>
  );
}
