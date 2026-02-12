// /src/components/Owner.jsx
import React from "react";
import "./Owner.css";

function Owner() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Meet Our Owners</h1>

      <div className="row d-flex justify-content-center">
        {/* Owner 1 */}
        <div className="col-md-5 text-center mb-4 owner-card">
          <img
            src="/assets/shubham1.jpg" 
            alt="Owner 1"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "150px", height: "150px" }}
          />
          <h3>Nikhil Mukati</h3>
          <p>
            "Humari koshish har event ko ek yaadgar tajurba banane ki hoti hai.
            Hum har project ko apne dil se, creative tareeke se handle karte
            hain, aur har detail ko perfect banane ki puri koshish karte hain.
            Humara goal sirf ek event organize karna nahi hai, balki ek aisa
            anubhav dena hai jo aap hamesha yaad rakhein."
          </p>
        </div>

        {/* Owner 2 */}
        <div className="col-md-5 text-center mb-4 owner-card">
          <img
            src="/assets/shubham1.jpg" 
            alt="Owner 2"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "150px", height: "150px" }}
          />
          <h3>Shubham Mukati</h3>
          <p>
            "Humare liye har event ek opportunity hai apni creativity dikhane ki
            aur aapke sapno ko sach karne ki. Hum har project ko apni puri
            mehnat aur dedication se dekhte hain, taki har chhoti si chhoti baat
            bhi perfect ho. Humare liye har event ka maksad apne clients ko ek
            yaadgar aur creative experience dena hai."
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Owner;
