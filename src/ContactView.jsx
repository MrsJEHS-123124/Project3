import React, { useState } from "react";

const ContactView = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: add validation or submit logic here
    console.log("Submitted Contact Form:", { firstName, lastName, email, comments });

    // Clear form after submission (optional)
    setFirstName("");
    setLastName("");
    setEmail("");
    setComments("");
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactView;