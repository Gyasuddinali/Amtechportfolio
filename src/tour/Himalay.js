import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutSection() {
  return (
    <div className="container pt-2 mt-2" id="uttranchal">
      <h1 className=" rounded text-center text-warning" style={{fontFamily:'cursive'}}>Uttarakhand</h1>
      <h2 className=" rounded text-success text-center mt-3">Feeling the Himalayas
</h2>

      <div className="row mt-4">
        {/* Left: About Section */}
        <div className="col-lg-6 col-md-12 mb-4">
          <h2 className="fw-bold">FALL IN LOVE WITH THE TERRAIN</h2>
          <p className="text-justify">
           Lofty mountains, plush valleys, exotic flowers and unmatched spectacle 
against permanent snows... the great Himalayan escape has always been 
the cynosure of the discerning. Nestled under the shadows of this majestic 
mountain range is Uttarakhand - the state that offers the glory of nature at 
its best. Life in these hills is nothing but a glimpse of paradise - where a 
leisurely walk is often interrupted by the passing clouds, where every breath 
is filled with the scent of a thousand flowers, where every view is painted in 
a million shades of greens and blues. It is in these serene settings that 
Paradise Cliff is placed. A unique rejuvenating option that is unmatched in 
ambience and incomparable in features.



          </p>

          <img data-aos="fade-down" 
            src="https://1.bp.blogspot.com/-50oCXAwJnzA/XwBOcXM_rJI/AAAAAAAAMeI/OfU-0A-_gKMyKhREHYu47CP5bFjYdZoyQCLcBGAsYHQ/d/106909661_956712478084003_4686402456312810897_o.jpg"
            alt="Main View"
            className="img-fluid rounded mt-3"
            style={{ width: '100%', objectFit: 'cover', maxHeight: '300px' }}
          />
        </div>

        {/* Right: 3 Images */}
        <div className="col-lg-6 col-md-12 d-flex flex-column gap-3">
          <img data-aos="fade-up"
            src="https://as2.ftcdn.net/v2/jpg/02/87/20/19/1000_F_287201927_2qIqUSkAp6dxsY5erhmLrUQDFafJFFg7.jpg"
            alt="Image 1"
            className="img-fluid rounded"
            style={{ objectFit: 'cover', width: '100%', maxHeight: '180px' }}
          />
          <img data-aos="zoom-in"
            src="https://thumbs.dreamstime.com/b/kumaon-himalaya-mountain-range-snow-peaks-flying-migratory-birds-as-viewed-binsar-zero-point-uttarakhand-india-176822477.jpg"
            alt="Image 2"
            className="img-fluid rounded"
            style={{ objectFit: 'cover', width: '100%', maxHeight: '180px' }}
          />
          <img data-aos="flip-right" 
            src="https://c8.alamy.com/comp/2F85WEB/himalaya-panoramic-view-of-indian-himalayas-great-himalayan-range-uttarakhand-india-2F85WEB.jpg"
            alt="Image 3"
            className="img-fluid rounded"
            style={{ objectFit: 'cover', width: '100%', maxHeight: '180px' }}
          />
        </div>
      </div>

      {/* Bottom Section with Overlay */}
      <div className="mt-5 position-relative">
        <img 
          src="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/07/30145525/valley-of-flowers-1600x900.jpg"
          alt="Bottom Image"
          className="w-100 rounded"
          style={{
            objectFit: 'cover',
            height: '400px',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
}

export default AboutSection;
