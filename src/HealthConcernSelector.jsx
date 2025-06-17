import React from 'react';

export default function HealthConcernSelector({ onSelect }) {
 console.log("✅ HealthConcernSelector is rendering"); 
  return (
    <div className="health-selector">
      <h2>Select a Health Concern:</h2>
      <button onClick={() => onSelect("stress")}>Stress</button>
      <button onClick={() => onSelect("sprainedAnkle")}>Sprained Ankle</button>
      <button onClick={() => onSelect("weightLoss")}>Weight Loss</button>
    </div>
  );
}
console.log("HealthConcernSelector component loaded");
