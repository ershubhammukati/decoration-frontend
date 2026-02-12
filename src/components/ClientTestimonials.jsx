// src/components/ClientTestimonials.jsx
import React from 'react';
import Slider from 'react-slick';
import './ClientTestimonials.css'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function ClientTestimonials({ clients }) { 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold mt-5">Happy Clients</h2>
        <div className="divider-with-icon mx-auto mt-4 mb-5"></div>
      </div>

      <Slider {...settings}>
        {clients.map((client, index) => (
          <div className="text-center px-3" key={index}>
            <img
              src={client.image}
              alt={client.name}
              className="rounded-circle mx-auto d-block mb-3 client-img"
            />
            <h5 className="fw-bold">{client.name}</h5>
            <div className="text-warning mb-2">
              {'⭐'.repeat(client.rating)}
            </div>
            <p className="text-muted small">{client.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClientTestimonials;
