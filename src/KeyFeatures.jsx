// src/components/KeyFeatures.jsx
import React from 'react';
import './styles/keyFeatures.css';
import {
  FaLock,
  FaWifi,
  FaChair,
  FaVolumeMute,
  FaInbox,
  FaBolt,
  FaFileSignature,
} from 'react-icons/fa';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import { GiAirConditioner } from 'react-icons/gi';

const features = [
  { icon: <FaLock className="kf-icon" />, text: "Private Director Cabin with Lockable Access" },
  { icon: <FaChair className="kf-icon" />, text: "Premium Furniture and Executive Seating" },
  { icon: <FaWifi className="kf-icon" />, text: "Fast Internet with No Drops" },
  { icon: <FaVolumeMute className="kf-icon" />, text: "Sound Controlled Environment for Calls and Meetings" },
  { icon: <MdOutlineMeetingRoom className="kf-icon" />, text: "Access to Conference Rooms and Business Lounges" },
  { icon: <FaInbox className="kf-icon" />, text: "Mail Handling and Guest Reception" },
  { icon: <FaBolt className="kf-icon" />, text: "Power Backup and Air Conditioning Always On" },
  { icon: <FaFileSignature className="kf-icon" />, text: "No Brokerage, No Long-Term Lease Required" },
];

const KeyFeatures = () => {
  return (
    <section className="kf-section">
      <div className="kf-container">
        <h2>Everything you need to get working, nothing you don’t want to deal with</h2>
        <div className="kf-grid">
          {features.map((feature, index) => (
            <div className="kf-item" key={index}>
              {feature.icon}
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
