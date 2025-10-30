// GalleryCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../../assets/gal.png";
import img2 from "../../assets/gal2.png";
import img3 from "../../assets/gal3.png";
import img4 from "../../assets/gal4.png";
import img5 from "../../assets/gal5.png";


export default function GalleryCarousel() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>

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

