// App.tsx
import HeroSection from '../components/home-containers/heroSection';
import AboutSection from './home-containers/AboutSection';
import MasterPlan from '../components/home-containers/MasterPlan';
import GalleryCarousel from './home-containers/GalleryCarousel';
import LocationMap from '../components/home-containers/LocationMap';
import FloorPlanCarousel from './home-containers/FloorPlans';
export default function App() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <MasterPlan />
      <FloorPlanCarousel />
      {/* <GalleryCarousel /> */}
      <LocationMap />
    </div>
  );
}
