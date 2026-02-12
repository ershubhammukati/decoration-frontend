//src/layout/Headers.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom"; 
import Logo from '../../public/brand.svg'; 
import './Header.css'

function Headers() {
  const navbarRef = useRef(null);

  const handleNavLinkClick = () => {
    if (navbarRef.current) {
      // Bootstrap collapse instance
      const bsCollapse = new window.bootstrap.Collapse(navbarRef.current, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <div className="fluid px-0">
      <nav className="navbar navbar-expand-lg bg-success p-0">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
            <img
              src={Logo}
              alt="Shri IG Decoration & Event Planner"
              style={{ maxHeight: "60px" }} 
            />
          </Link>

          <button
            className="navbar-toggler mx-1" 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarRef}>
            <ul className="navbar-nav d-flex w-100 justify-content-between text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us" onClick={handleNavLinkClick}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery" onClick={handleNavLinkClick}>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop" onClick={handleNavLinkClick}>Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rental" onClick={handleNavLinkClick}>Rental</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/prices" onClick={handleNavLinkClick}>Prices</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us" onClick={handleNavLinkClick}>Contact Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </Link>
                <ul className="dropdown-menu bg-success">
                  <li><Link className="dropdown-item" to="/services/birthday">Birthday Decorations</Link></li>
                  <li><Link className="dropdown-item" to="/services/haldi">Haldi Decorations</Link></li>
                  <li><Link className="dropdown-item" to="/services/mehandi" >Mehandi Decorations</Link></li>
                  <li><Link className="dropdown-item" to="/services/car-decorations" >Car Decorations</Link></li>
                  <li><Link className="dropdown-item" to="/services/room-decorations" >Room Decorations</Link></li>
                  <li><Link className="dropdown-item" to="/services/baby-shower-decorations" >Baby Shower Decorations</Link></li>
                  <li><Link className="dropdown-item" to="/services/welcome-home-decorations" >Welcome Home Decorations</Link></li>
                  <li><Link className="dropdown-item" to="/services/ring-ceremony-decorations" >Ring Ceremony Decorations</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <p className="heading text-center fw-bold fs-1 fs-md-2 fs-lg-1 my-3 text-danger">
        Welcome to Shri IG Decoration & Event Planner
      </p>
    </div>
  );
}

export default Headers;























// import React from "react";
// import { Link } from "react-router-dom"; 
// import Logo from '../../public/brand.svg'; 
// import './Header.css'
// function Headers() {
//   return (
//     <div className="fluid px-0">
//       <nav className="navbar navbar-expand-lg bg-success p-0">
//         <div className="container d-flex justify-content-between align-items-center">
//           <Link className="navbar-brand" to="/">
//             <img
//               src={Logo}
//               alt="Shri IG Decoration & Event Planner"
//               style={{ maxHeight: "60px" }} 
//             />
//           </Link>

//           {/* Navbar Toggle Button aligned to right */}
//           <button
//             className="navbar-toggler mx-1" 
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Collapsible Navbar Items */}
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav d-flex w-100 justify-content-between text-center">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about-us">
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/gallery">
//                   Gallery
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/shop">
//                   Shop
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/rental">
//                   Rental
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/prices">
//                   Prices
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact-us">
//                   Contact Us
//                 </Link>
//               </li>
//                <li className="nav-item dropdown ">
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   to="/"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Our Services
//                 </Link>
//                 <ul className="dropdown-menu bg-success" aria-labelledby="navbarDropdown">
//                   <li>
//                     <Link className="dropdown-item" to="/services/birthday">
//                       Birthday Decorations
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/services/haldi">
//                       Haldi Decorations
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/services/mehandi">
//                       Mehandi Decorations
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/services/car-decorations">
//                       Car Decorations
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/services/room-decorations">
//                       Room Decorations
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/services/baby-shower-decorations">
//                       Baby Shower Decorations
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/services/welcome-home-decorations">
//                       Welcome Home Decorations
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/services/ring-ceremony-decorations">
//                       Ring Ceremony Decorations
//                     </Link>
//                   </li>
//                 </ul>
//                 </li>
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/owner">
//                   Owner Info
//                 </Link>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Heading */}
//       <p className="heading text-center custom-font fw-bold fs-1 fs-md-2 fs-lg-1 my-3 text-danger">
//         Welcome to Shri IG Decoration & Event Planner
//       </p>
//     </div>
//   );
// }

// export default Headers;


