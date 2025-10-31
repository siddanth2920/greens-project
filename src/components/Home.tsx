// App.tsx
import HeroSection from '../components/home-containers/heroSection';
import AboutSection from './home-containers/AboutSection';
import MasterPlan from '../components/home-containers/MasterPlan';
import GalleryCarousel from './home-containers/GalleryCarousel';
import LocationMap from '../components/home-containers/LocationMap';
import FloorPlanCarousel from './home-containers/FloorPlans';
import { useState } from 'react';
import Ameneties from './home-containers/ameneties';
type Section =
  | "hero"
  | "about"
  | "master"
  | "floor"
  | "location"
  | "ameneties";

export default function App() {
  const [current, setCurrent] = useState<Section>("hero");

  const renderSection = () => {
    switch (current) {
      case "about":
        return <AboutSection onBack={() => setCurrent("hero")} />;
      case "master":
        return <MasterPlan onBack={() => setCurrent("hero")} />;
      case "floor":
        return <FloorPlanCarousel onBack={() => setCurrent("hero")} />;
      case "location":
        return <LocationMap onBack={() => setCurrent("hero")} />;
      case "ameneties":
        return <Ameneties onBack={() => setCurrent("hero")} />;
      default:
        return (
          <HeroSection
            onNavigate={(val: Section) => setCurrent(val)}
          />
        );
    }
  };

  return <div className="w-full h-screen">{renderSection()}</div>;
}
// export default function App() {
//   return (
//     <div className="flex flex-col w-full">
//       <HeroSection />
//       <AboutSection />
//       <MasterPlan />
//       <FloorPlanCarousel />
//       {/* <GalleryCarousel /> */}
//       <LocationMap />
//     </div>
//   );
// }
