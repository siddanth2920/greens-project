// GalleryCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../../assets/greensfloorplans/3331-min.png";
import img2 from "../../assets/greensfloorplans/3332-min.png";
import img3 from "../../assets/greensfloorplans/3333-min.png";
import img4 from "../../assets/greensfloorplans/3731-min.png";
import img5 from "../../assets/greensfloorplans/3732-min.png";
import img6 from "../../assets/greensfloorplans/3733-min.png";
import img7 from "../../assets/greensfloorplans/333w1-min.png";
import img8 from "../../assets/greensfloorplans/333w2-min.png";
import img9 from "../../assets/greensfloorplans/333w3-min.png";
import img10 from "../../assets/greensfloorplans/262e1-min.png";
import img11 from "../../assets/greensfloorplans/262e2-min.png";
import img12 from "../../assets/greensfloorplans/262e3-min.png";

export default function FloorPlanCarousel() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Floor Plans</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Gallery ${i}`}
              className="w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

