import React from "react";
import "./About.css";
import avatar from "../../assets/img/avatar.png";

const About = () => {
  return (
    <div className="aboutWrapper">
      <h1>Welcome...</h1>
      <div className="intro">
        <p>
          Welcome to "Koch dir was...", your go-to app for discovering delicious recipes based on the ingredients you
          have at hand! Whether you're looking for a quick meal or something more elaborate, this app helps you find the
          perfect recipe with ease.
        </p>
      </div>

      <h2>About the Developer</h2>
      <div className="developerInfo">
        <img
          src={avatar}
          alt="Bea"
          className="profilePic"
        />
        <p>
          Hi, I'm Bea, a 39-year-old junior developer passionate about web development. I transitioned into tech 1.5
          years ago, and since then, I've been honing my skills as a software developer. I have a certificate in web
          development from a Junior Developer Bootcamp, and over the last 10 months, I've gained hands-on experience as
          a software developer with a focus on front-end technologies.
        </p>
        <p>
          Before entering the world of tech, I accumulated 18 years of experience in the healthcare industry, where I
          worked in both administrative and practical roles. For four of those years, I served as a team leader,
          managing and guiding teams to success.
        </p>
        <p>
          My journey into web development began out of a desire to create and innovate. This app is one of my projects
          where I bring together my love for cooking and coding. I hope you find it as useful and enjoyable as I did
          creating it!
        </p>
      </div>

      <h2>About the App</h2>
      <div className="appInfo">
        <p>
          "Koch dir was..." was built with the goal of making cooking more accessible and fun. The app allows users to
          search for recipes based on available ingredients, making it easier to decide what's for dinner. With an
          intuitive interface and a vast database of recipes, you're sure to find something that fits your taste and
          dietary needs.
        </p>
        <p>
          This app was developed using modern web technologies, ensuring a smooth and responsive user experience. It's
          designed to be user-friendly and accessible on both desktop and mobile devices.
        </p>
      </div>
    </div>
  );
};

export default About;
