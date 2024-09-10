import React from "react";

const PersonCard = ({ person }) => {
  return (
    <div className="person-card-container">
      <div className="person-card">
        <div className="card-side card-front">
          <h3>
            {person.name.title} <br />
            {person.name.first} {person.name.last}
          </h3>
          <img
            src={person.picture.large}
            alt={`${person.name.first}`}
          />
          <div>
            <hr />
            <h3>Contact</h3>
            <p>☎️ {person.phone}</p>
            <p>📱 {person.cell}</p>
            <p>📨 {person.email}</p>
          </div>
          <br />
          <div>
            <hr />
            <h3>Address</h3>
            <p>
              {person.location.street.name} {person.location.street.number}
            </p>
            <p>
              {person.location.postcode} {person.location.city}
            </p>
          </div>
          <p>
            {person.location.state} | {person.location.country}
          </p>
        </div>
        <br />
        <div>
          <hr />
          <h3>Additional Information</h3>
          <p>
            {person.gender} | {person.dob.age}
          </p>
          <p>Nationality: {person.nat}</p>
          <p>Username: {person.login.username}</p>
          <p>Registered: {new Date(person.registered.date).toLocaleDateString()}</p>
          <p>Timezone: {person.location.timezone.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
