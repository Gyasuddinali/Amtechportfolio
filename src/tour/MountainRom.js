import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MountainRom() {
  return (
    <div className="container mt-5" id="almora">
      <h1 className="fst-italic text-success text-center" style={{fontFamily:'cursive'}}>
        ALMORA
      </h1>

      <div className="row mt-4">
        {/* Left: 3 Images */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="d-flex flex-column gap-3">
            <img data-aos="flip-up"
              src="https://tse1.mm.bing.net/th/id/OIP.sbDEJPxUOU0onhHqo-_jOAHaE8?w=626&h=418&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Image 1"
              className="img-fluid rounded"
              style={{ objectFit: 'cover', maxHeight: '180px' }}
            />
            <img data-aos="fade-down"
              src="https://i.pinimg.com/originals/0f/68/01/0f6801791a84b53db979c72404adf5b8.png"
              alt="Image 2"
              className="img-fluid rounded"
              style={{ objectFit: 'cover', maxHeight: '180px' }}
            />
            <img data-aos="flip-right"
              src="https://th.bing.com/th/id/R.185a4025b2426d2bdb69aac4c2a9e1fe?rik=dFrCXif7Gi87Hw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2f6966828-beautiful-mountain-lakes.jpg&ehk=%2bg%2bVQ5VbliISAtOpOXMF0kQcE9UuTuxx58zhi69EO4k%3d&risl=&pid=ImgRaw&r=0"
              alt="Image 3"
              className="img-fluid rounded"
              style={{ objectFit: 'cover', maxHeight: '180px' }}
            />
          </div>
        </div>

        {/* Right: Text & Image */}
        <div className="col-lg-6 col-md-12">
          <h2 className="bg-success text-white text-center rounded p-2 mb-3" style={{fontFamily:'cursive'}}>
            Romance of the Mountains
          </h2>
          <p className="text-justify">
          Hovering between the hills in the heart of the Kumaon range lies Almora — a 
5400 ft high scenic town offering a unique blend of breathtaking natural 
beauty and modern convenience. Known as the <strong className='text-primary'>"Switzerland of India"</strong>, 
Almora is famed for its timeless culture, lush forests, valleys, lakes, and 
rivers. Paradise Cliff, at the highest point in Almora, offers a peaceful life 
surrounded by nature while staying close to all essential amenities.
          </p>
          <img data-aos="fade-up"
            src="https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=dawn-landscape-mountains-247478.jpg&fm=jpg"
            alt="Mountain View"
            className="img-fluid rounded w-100 mt-3"
            style={{ objectFit: 'cover', maxHeight: '300px' }}
          />
        </div>
      </div>

      {/* Bottom Image with Overlay */}
      <div className="mt-5 position-relative">
        <img
          src="https://th.bing.com/th/id/R.f7530fdef06d86245c8cd739f2a5cf76?rik=EUjOSc4UjUYVCQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fMountain-wallpaper-HD-pictures-images-photos.jpg&ehk=vq8nbZerNFD2C1EvsPq8%2fibw03iCbvqKJ%2bMAVqR4YRk%3d&risl=&pid=ImgRaw&r=0"
          alt="Bottom Image"
          className="w-100 rounded"
          style={{
            height: '400px',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Overlay Box */}
        <div
          className="position-absolute text-white p-3 p-sm-4"
          style={{
            top: '50%',
            left: '5%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '8px',
            maxWidth: '90%',
            width: '100%',
          }}
        >
          <h5 className="fw-bold"> Our Highlights</h5>
          <ul className="small mb-0" >
            <li>5400 ft above sea level</li>
            <li>345 km from Delhi</li>
            <li>Nearby: Nainital, Ranikhet, Kausani, Binsar, Shitlakhet, Mukteshwar</li>
            <li>Modern facilities: hospitals, colleges, schools, transport</li>
            <li>Stunning views of Trishul and other Himalayan peaks</li>
            <li>Peaceful, yet close to essentials</li>
            <li>Winter temp: 2–15°C | Summer: 9–20°C</li>
            <li>Excellent roads & public transportation</li>
            <li>Ideal for long stays, health, and peace seekers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MountainRom;
