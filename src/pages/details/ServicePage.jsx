//src/pages/details/ServicePage.jsx
import { useParams } from "react-router-dom";
import serviceData from "../../data/serviceData";

const ServicePage = () => {
  const { serviceName } = useParams(); // e.g., birthday
  const data = serviceData[serviceName];

  if (!data) {
    return <h2 className="text-center mt-5 mb-5 text-info fs-5">Service Not Found, Coming Soon...!!! Please Wait...</h2>;
  }

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">{data.title}</h2>
         <div className="divider-with-icon mx-auto mt-3 mb-5"></div>
      <div className="row">
        {data.images.map((item, index) => (
  <div className="col-md-3 mb-4" key={index}>
    <div className="card h-100">
      <img
        src={item.src}
        className="card-img-top"
        alt={item.name || `Decoration ${index}`}
        
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text fw-bold text-success">Price: ₹{item.price}</p>
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default ServicePage;
