
// import bg from './destination/Landscape.jpg'
// function Hero() {
//   return (
//     <section className="text-center p-5 bg-light">
//       <img
//         src="your-logo.png"
//         alt="PRADISE CLIFF Logo"
//         height="80"
//         className="mb-3"
//       />
//       <h1 className="display-4 fw-bold">PRADISE CLIFF</h1>
//       <p className="lead">Crown Jewel of Almorah</p>
//       <p><em>“Where the Himalayas greet you every morning.”</em></p>
//       <img
//         src={bg}
//         alt="Himalayan Peaks"
//         className="img-fluid rounded shadow"
//       />
//       <div className="mt-4">
//         <h2>Escape to Tranquility</h2>
//         <p className="text-muted">
//           Nestled amidst the lush green hills and snow-kissed peaks of
//           Uttarakhand...
//         </p>
//       </div>
//     </section>
//   );
// }



// // HeroSection.jsx or inside your component

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

// import './HeroSection.css'; // You can create this for styles

// const HeroSection = () => {
//   const images = [
//     "https://yourdomain.com/image1.jpg",
//     "https://yourdomain.com/image2.jpg",
//     "https://yourdomain.com/image3.jpg",
//   ];

//   return (
//     <section className="hero-section" id="hero">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         loop={true}
//         className="hero-swiper"
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="hero-slide"
//               style={{
//                 backgroundImage: `url(${img})`,
//               }}
//             ></div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Overlayed Content */}
//       <div className="hero-overlay">
//         <div className="container text-center text-white hero-content animate-fade">
//           <h1 className="hero-title">PARADISE CLIFF – Crown Jewel of Almorah</h1>
//           <h2 className="hero-subtitle">Where the Himalayas greet you every morning.</h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


















import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import './sliderheader.css'; 
import img1 from './destination/Almora Mystry and Beauti.jpeg';
import img2 from './destination/Meditation Room.jpg';
import img3 from './destination/Himalaya From Almora.jpeg';
import img4 from './destination/Hidden Gem Of Himalaya.jpeg';
import img5 from './destination/Landscape.jpg';
import img6 from './destination/Row Cotteges.jpg';
const HeroSection = () => {
  const images = [
    img1, img2, img3, img4,img5,img6
  ];
// src/components/HeroSection.jsx


  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">PARADISE CLIFF – Crown Jewel of Almorah</h1>
          <h2 className="hero-subtitle">
            Where the Himalayas greet you every morning.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
