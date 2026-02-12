// // src/pages/Home.jsx
// import React from 'react';
// import Banner from '../components/Banner';
// import FeatureSection from '../components/FeatureSection';

// function Home() {
//   return (
//     <div>
//       <Banner />

//       <FeatureSection
//         images={["/assets/slider 1.png", "/assets/Property 1=Variant2.png"]}
//         title="Seasonal Decoration"
//         subtitle="It's Christmas"
//         description="Are you looking to transform your home, office, shop or restaurant this Christmas? Here at The Creative Balloon Company we offer a bespoke design and installation service that will truly bring the spirit of Christmas to your door! Each setup is completely unique and built to suit your individual style, home décor and chosen Christmas theme. If you are interested in any of our services then please do contact us for more information, we would be delighted to assist you!"
//         reverse={false}
//       />
//       <FeatureSection
//         images={["/assets/slider2.1.png", "/assets/slider2.2.png", "/assets/slider2.3.png", "/assets/slider2.4.png"]}
//         title="Balloons Decoration"
//         description="Are you looking to transform your home, office, shop or restaurant this Christmas? Here at The Creative Balloon Company we offer a bespoke design and installation service that will truly bring the spirit of Christmas to your door! Each setup is completely unique and built to suit your individual style, home décor and chosen Christmas theme. If you are interested in any of our services then please do contact us for more information, we would be delighted to assist you!"
//         reverse={true}
//       />
//       <FeatureSection
//         images={["/assets/slider3.1.png", "/assets/slider3.2.png", "/assets/slider3.3.png", "/assets/slider3.4.png"]}
//         title="Event Decoration"
//         description="Are you looking to transform your home, office, shop or restaurant this Christmas? Here at The Creative Balloon Company we offer a bespoke design and installation service that will truly bring the spirit of Christmas to your door! Each setup is completely unique and built to suit your individual style, home décor and chosen Christmas theme. If you are interested in any of our services then please do contact us for more information, we would be delighted to assist you!."
//         reverse={false}
//       />
//        <FeatureSection
//         images={["/assets/birthday1.jpeg", "/assets/birthday2.webp"]}
//         title="Birthday Decoration"
//         subtitle="It's Christmas"
//         description="Are you looking to transform your home, office, shop or restaurant this Christmas? Here at The Creative Balloon Company we offer a bespoke design and installation service that will truly bring the spirit of Christmas to your door! Each setup is completely unique and built to suit your individual style, home décor and chosen Christmas theme. If you are interested in any of our services then please do contact us for more information, we would be delighted to assist you!"
//         reverse={true}
//       />
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import Banner from '../components/Banner';
import FeatureSection from '../components/FeatureSection';
import homeData from '../data/homeData.json'; 

function Home() {
  return (
    <div>
      <div className='my-5'>
      <Banner />
      </div>
      {/* Map over the data and render each FeatureSection dynamically */}
      {homeData.map((section, index) => (
        <FeatureSection
          key={index}
          images={section.images}
          title={section.title}
          subtitle={section.subtitle}  // Some sections may not have a subtitle
          description={section.description}
          reverse={section.reverse}
        />
      ))}
    </div>
  );
}

export default Home;
