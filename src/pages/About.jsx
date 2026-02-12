// src/pages/About.jsx
import React from "react";
import AboutSection from "../components/AboutSection";
import ClientTestimonials from "../components/ClientTestimonials";
import OurPartners from "../components/OurPartners";

// Data for AboutSections
const aboutData = [
  {
    image: "/assets/about_us_1.png",
    title: "ABOUT US",
    subtitle: "Who We Are ?",
    description:
      "We are Shri IG Decoration & Event Planner, committed to making your moments unforgettable. From birthdays to weddings, our creative team brings your dreams to life.",
    reverse: false,
  },
  {
    image: "/assets/about_us_2.png",
    title: "Why Choose Us?",
    description:
      "Our team delivers personalized experiences, blending creativity and professionalism to ensure every event is unique and memorable. With a passion for detail and a commitment to excellence, we design décor that reflects your vision. Whether it's a birthday, wedding, or corporate event — we ensure every moment is beautifully captured. We value your trust and promise on-time execution, stunning aesthetics, and a stress-free planning experience from start to finish.",
    reverse: true,
  },
  {
    image: "/assets/mission1.jpg",
    title: "Our Mission",
    description:
      "Our mission is to transform ordinary events into unforgettable experiences through creativity, elegance, and personalized service. We believe every celebration deserves a magical touch — whether it's a cozy birthday or a grand wedding. With a keen eye for detail, innovative designs, and a client-first mindset, we strive to create moments that bring joy, inspire smiles, and leave lasting memories.",
    reverse: false,
  },
];

// Data for OurPartners
const partnersData = [
  {
    image: "/assets/sawariya.jpeg", 
    name: "Shri Sawariya Wedding Planner, Uchawad",
    link: "https://partner1.com", 
  },
  {
    image: "/assets/sstd.jpeg",
    name: "Shri Shyam Decoration & Event Management, Talwada",
    link: "/", 
  },
  {
    image: "/assets/photographer.webp", 
    name: "Indore Wedding Photography, Talwada",
    link: "/", 
  },
];
// Data for Client Testimonials
const clientsData = [
  {
    name: "Gokul Chandel",
    image: "/assets/gokul.jpeg",
    comment: "The decorations were breathtaking, and every detail was thoughtfully planned!",
    rating: 5,
  },
  {
    name: "Raj Wagadre",
    image: "/assets/raj.jpeg",
    comment: "Their team turned our vision into reality. Truly professional and creative!",
    rating: 4,
  },
  {
    name: "Ritika Sajdeh Sharma",
    image: "/assets/ritika.webp",
    comment: "Beautiful setup and seamless execution. I couldn’t have asked for more!",
    rating: 5,
  },
  {
    name: "Rajveer Joshi",
    image: "/assets/rajveer.jpeg",
    comment: "Every element of the event was flawless. Highly recommended!",
    rating: 5,
  },
  {
    name: "Shyam Sagar Chouhan",
    image: "/assets/himanshu.jpeg",
    comment: "Creative, reliable, and efficient. The event looked spectacular!",
    rating: 4,
  },
  {
    name: "Neha Singh",
    image: "/assets/bharti.jpeg",
    comment: "The birthday party was magical! My daughter couldn’t stop smiling.",
    rating: 5,
  },
  {
    name: "Shubham Mukati",
    image: "/assets/shubham1.jpg",
    comment: "The team brought so much energy and creativity. Truly the best!",
    rating: 5,
  },
  {
    name: "Himanshu Kulkarni",
    image: "/assets/himanshu.jpeg",
    comment: "Exceptional decorations and attention to detail. Really impressed!",
    rating: 4,
  },
  {
    name: "ShivSagar Patel",
    image: "/assets/shiv.jpeg",
    comment: "Professional, punctual, and creative. Made the event unforgettable!",
    rating: 5,
  },
];

function About() {
  return (
    <div>
      <h4 className="text-success text-center mt-4 fw-bold fs-1">About US</h4>
      <div className="divider-with-icon mx-auto mt-3 mb-5"></div>
      {aboutData.map((section, index) => (
        <AboutSection
          key={index}
          image={section.image}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
          reverse={section.reverse}
        />
      ))}
      <OurPartners partners={partnersData} />
      <ClientTestimonials clients={clientsData} /> 
    </div>
  );
}

export default About;
