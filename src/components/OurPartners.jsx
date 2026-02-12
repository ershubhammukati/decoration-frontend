// src/components/OurPartners.jsx
import './OurPartners.css'; 

function OurPartners({ partners }) {
  return (
    <section className="partners-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold text-success mb-4">Our Partners</h2>
        <div className="text-center mb-4">
          <div className="divider-with-icon mx-auto mt-4"></div>
        </div>
        <div className="row">
          {partners.map((partner, index) => {
            return (
              <div className="col-md-4 mb-4" key={index}>
                <a href={partner.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <img
                src={partner.image}
                alt={partner.name}
                className="img-fluid "
                style={{ maxHeight: '150px' }}
              />
              <p className="mt-2 text-success fw-bold ">{partner.name}</p>

            </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
