// src/pages/Rental.jsx
import React from 'react';
import RentalItem from '../components/RentalItem';

function Rental() {
  return (
    <div className="container my-5">
      <h2 className="text-center text-success fw-bold mb-2" style={{ fontStyle: 'italic' }}>
        RENTAL DECOR
      </h2>
      <div className="text-center mb-4">
  <div className="divider-with-icon mx-auto mt-1"></div>
</div>
      <p className="text-center text-muted mb-5">
        We offer a wide variety of rental décor that add a special touch to your event! These include an array of pipe and drapes, backdrops, Marquee and Mosaic letters or numbers, custom table letters, a deluxe candy cart, snack bar table, or pedestals!
      </p>

      <div className="row">
        <RentalItem
          image="/assets/rental1.png"
          title="BACKDROPS"
          description="Our array of backdrops unlike any others will take your event to the next level!"
          link="/rental/backdrops"
        />
        <RentalItem
          image="/assets/rental2.png"
          title="PEDESTALS"
          description="Bring any dessert station to life with our quality pedestals and cake stands!"
          link="/rental/pedestals"
        />
        <RentalItem
          image="/assets/rental3.png"
          title="LETTERING"
          description="Light up your next event with our marquee LED letters or balloon mosaics!"
        />
        <RentalItem
          image="/assets/rental4.png"
          title="CUSTOM SIGNS"
          description="Make your event extra special with our custom signs tailored to your event!"
        />
        <RentalItem
  image="/assets/rental5.png"
  title="MOSAIC NUMBERS"
  description="Celebrate milestones with our large balloon-filled mosaic numbers, perfect for birthdays and anniversaries!"
/>
<RentalItem
  image="/assets/rental6.png"
  title="CANDY CARTS"
  description="Add sweetness to your celebration with our charming and decorative candy carts!"
/>
<RentalItem
  image="/assets/rental7.png"
  title="TABLE LETTERS"
  description="Personalize your event with custom table letters to highlight names or themes!"
/>
<RentalItem
  image="/assets/rental8.png"
  title="SNACK BAR TABLE"
  description="Make your snack station stand out with our stylish and functional snack bar tables!"
/>

      </div>
    </div>
  );
}

export default Rental;
