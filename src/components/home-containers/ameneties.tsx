import { useEffect, useState } from "react";

import img1 from "../../assets/ameneties/11.png";
import img2 from "../../assets/ameneties/2.jpg";
import img3 from "../../assets/ameneties/3.jpg";
import img4 from "../../assets/ameneties/4.jpg";
import img5 from "../../assets/ameneties/5.jpg";
import img6 from "../../assets/ameneties/6.jpg";
import img7 from "../../assets/ameneties/7.jpg";
import img8 from "../../assets/ameneties/8.jpg";
import img9 from "../../assets/ameneties/9.jpg";
import img10 from "../../assets/ameneties/10.jpg";
import img11 from "../../assets/ameneties/1.jpg";
// add more imports...

type Props = { onBack: () => void };

export default function Ameneties({ onBack }: Props) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]; // add more here
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 2000); // 3s per slide
    return () => clearInterval(timer);
  }, [images.length]);

  return (
   <section className="h-screen w-full relative bg-black flex items-center justify-center overflow-hidden pt-32">

    {/* <button
        onClick={onBack}
        className="absolute top-5 left-5 bg-white/80 text-black px-4 py-2 rounded-full text-sm z-50"
      >
        Back
      </button> */}
  

      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Amenity image ${i + 1}`} 
          className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-6 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
