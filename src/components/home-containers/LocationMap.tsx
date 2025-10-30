// LocationMap.tsx
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

export default function LocationMap() {
  const center = { lat: 12.9716, lng: 77.5946 }; // Example: Bangalore

  return (
    <section className="h-[500px]">
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap mapContainerClassName="w-full h-full" center={center} zoom={14}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </section>
  );
}
