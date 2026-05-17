import React from "react";
import "./styles/dealsOffers.css";

const offers = [
  {
    location: "alt.f Sector 142",
    city: "NOIDA",
    offer: "15 DAYS RENT FREE",
    validTill: "Offers valid till 31st July 2025",
    button: "Explore More",
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-noida-142/", // Add your real link here
  },
  {
    location: "alt.f Sector 62",
    city: "NOIDA",
    offer: "30 DAYS RENT FREE",
    validTill: "Offers valid till 31st July 2025",
    button: "Explore More",
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-noida-62/",
  },
  {
    location: "alt.f Sector 68",
    city: "NOIDA",
    offer: "15 DAYS RENT FREE",
    validTill: "Offers valid till 31st July 2025",
    button: "Explore More",
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-grovy-optiva/",
  },
];

const OffersGlass = () => {
  return (
    <div className="do-wrapper">
      <div className="do-header">
        <h2>Make the smartest move for your business presence</h2>
      </div>

      <div className="do-card-container">
        {offers.map((item, idx) => (
          <div className="do-card do-shine" key={idx}>
            <h2>{item.location}</h2>
            <p className="do-city">{item.city}</p>
            <div className="do-offer">{item.offer}</div>
            <div className="do-validity">{item.validTill}</div>
            {item.button && (
              <a href={item.link} className="do-button-link">
                <button className="do-button">{item.button}</button>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersGlass;
