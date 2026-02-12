//src/pages/GalleryPage.jsx
import React, { useState } from "react";
import serviceData from "../../src/data/serviceData"; // adjust path if needed
import "./GalleryPage.css";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Collect all images from all service categories
  const allImages = Object.values(serviceData).flatMap((service) =>
    service.images.map((img) => ({
      ...img,
      category: service.title,
    }))
  );

  return (
    <div className="container py-4">
      <h2 className="text-center text-success mb-4">Gallery</h2>
      <div className="divider-with-icon mx-auto mt-3 mb-5"></div>

      <div className="row">
        {allImages.map((item, index) => (
          <div className="col-md-2 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={item.src}
                className="card-img-top"
                alt={item.name || `Decoration ${index}`}
                onClick={() => setSelectedImage(item.src)}
                style={{ cursor: "pointer" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text fw-bold">Price: ₹{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 bg-transparent">
              <div className="modal-body p-0">
                <img
                  src={selectedImage}
                  alt="Zoomed"
                  className="img-fluid w-100 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

















// import React from "react";
// import serviceData from "../../src/data/serviceData"; // your JSON with all services
// import './GalleryPage.css';

// const GalleryPage = () => {
//   // Collect all images from all service categories
//   const allImages = Object.values(serviceData).flatMap(service => service.images.map(img => ({
//     ...img,
//     category: service.title
//   })));

//   return (
//     <div className="container py-4">
//       <h2 className="text-center text-success mb-4">Gallery</h2>
//       <div className="divider-with-icon mx-auto mt-3 mb-5"></div>
//       <div className="row">
//         {allImages.map((item, index) => (
//           <div className="col-md-2 mb-4" key={index}>
//             <div className="card h-100">
//               <img
//                 src={item.src}
//                 className="card-img-top"
//                 alt={item.name || `Decoration ${index}`}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="card-text fw-bold">Price: ₹{item.price}</p>
//                 {/* <p className="text-muted">Category: {item.category}</p> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;

