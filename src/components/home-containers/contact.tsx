type Props = { onBack: () => void };

export default function Contact({ onBack }: Props) {
  return (
    <section
      className="w-full min-h-screen bg-gray-100 pt-16 flex items-center justify-center"
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center space-y-6">

        <button
          onClick={onBack}
          className="absolute top-5 left-5 bg-black/80 text-white px-4 py-2 rounded-full text-sm"
        >
          Back
        </button>

        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Contact Us
        </h2>

        <div className="space-y-4 text-gray-800 text-lg">

          <div className="flex items-center justify-center gap-3">
            <span>📞</span>
            <a href="tel:9999999999" className="hover:underline">
              9999999999
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span>📧</span>
            <a href="mailto:sales@greens.in" className="hover:underline">
              sales@greens.in
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span>📷</span>
            <a
              href="https://instagram.com/greens"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>

          <div className="text-sm text-gray-600 mt-4">
            <p className="font-medium">Corporate Office:</p>
            <p>New St, Manchirevula, Hyderabad</p>
          </div>

        </div>
      </div>
    </section>
  );
}
