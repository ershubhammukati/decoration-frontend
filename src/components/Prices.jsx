// //src/components/Prices.jsx
import React from "react";
import './Prices.css'; 

function Prices() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Prices</h1>
     <div className="text-center mb-4">
  <div className="divider-with-icon mx-auto mt-1"></div>
</div>
      <div className="row justify-content-center g-4 mt-5">
        {/* Event Planning Card */}
        <div className="col-lg-4 col-md-6">
          <div className="card p-4 shadow-sm border-0">
            <h3 className="text-success text-center mb-3">Event Planning</h3>
            <div className="text-center mb-4">
  <div className="divider-with-icon mx-auto mt-1"></div>
</div>
            <p className="text-muted text-center">Starting from</p>
            <h4 className="text-danger text-center mb-3">₹20,000</h4>
            <p className="para text-center">
              {" "}
              Comprehensive event planning, including venue selection, decor,
              and coordination. We handle everything with care.
            </p>
          </div>
        </div>

        {/* Decoration Card */}
        <div className="col-lg-4 col-md-6">
          <div className="card p-4 shadow-sm border-0">
            <h3 className="text-success text-center mb-3">Decoration</h3>
            <div className="text-center mb-4">
  <div className="divider-with-icon mx-auto mt-1"></div>
</div>
            <p className="text-muted text-center">Starting from</p>
            <h4 className="text-danger text-center mb-3">₹15,000</h4>
            <p className="para text-center">
              Tailored decorations, from creative themes to elegant designs. We
              bring your event's style and vision to life.
            </p>
          </div>
        </div>

        {/* Rentals Card */}
        <div className="col-lg-4 col-md-6">
          <div className="card p-4 shadow-sm border-0">
            <h3 className="text-success text-center mb-3">Rentals</h3>
            <div className="text-center mb-4">
  <div className="divider-with-icon mx-auto mt-1"></div>
</div>
            <p className="text-muted text-center">Starting from</p>
            <h4 className="text-danger text-center mb-3">₹5,000</h4>
            <p className="para text-center">
              Rent high-quality furniture and decor items. We offer tables,
              chairs, and more to make your event perfect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
