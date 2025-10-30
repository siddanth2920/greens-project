import img1 from "../../assets/masterplan.png";

export default function MasterPlan() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-6">Master Plan</h2>
      <img
        src={img1}
        alt="Master Plan"
        className="max-w-4xl mx-auto rounded-lg shadow-lg"
      />
    </section>
  );
}
