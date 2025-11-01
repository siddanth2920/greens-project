// LocationMap.tsx
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
type Props = { onBack: () => void };

export default function LocationMap({onBack}: Props) {
  const center = { lat: 12.9716, lng: 77.5946 }; // Example: Bangalore
  const lat = 17.2225;  // 17° 13' 21" N
  const lng = 78.5761;  // 78° 34' 34" E
 const placeName = "The Greens";
  return (
    <section className="h-[900px] pt-16">
            {/* <button
        onClick={onBack}
        className="absolute top-5 left-5 bg-white/80 text-black px-4 py-2 rounded-full text-sm"
      >
        Back
      </button> */}
      <iframe
        src={`https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      />
     {/* <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <img
          src={`https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=15&size=800x400&markers=${lat},${lng},red-pushpin`}
          alt="Map"
          className="w-full h-full object-cover"
        />
      </a> */}
      {/* <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap mapContainerClassName="w-full h-full" center={center} zoom={14}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript> */}
    </section>
  );
}
