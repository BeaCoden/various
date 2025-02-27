import React from "react";
import "./PrivacyPolice.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: February 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to <strong>IssIdee</strong>! Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal information when you use our app and website (
        <a
          href="https://issidee.vercel.app"
          target="_blank"
          rel="noopener noreferrer">
          issidee.vercel.app
        </a>
        ).
      </p>

      <h2>2. Data We Collect</h2>
      <p>We may collect the following types of data when you use IssIdee:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> If you create an account, we may collect your name, email, and login
          details.
        </li>
        <li>
          <strong>Usage Data:</strong> We collect data on how you use the app, such as searched ingredients and favorite
          recipes.
        </li>
        <li>
          <strong>Device Information:</strong> We may collect data about your device, such as browser type and IP
          address.
        </li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>Your data is used to improve the IssIdee experience:</p>
      <ul>
        <li>To provide and maintain our services.</li>
        <li>To personalize recipe recommendations.</li>
        <li>To enhance security and detect fraudulent activities.</li>
      </ul>

      <h2>4. Third-Party Services</h2>
      <p>We use the following third-party services that may collect data:</p>
      <ul>
        <li>
          <strong>Edamam API</strong> – Provides recipe data and nutrition information.
        </li>
        <li>
          <strong>Google Analytics</strong> – Helps us understand app usage (if applicable).
        </li>
        <li>
          <strong>Vercel</strong> – Our hosting platform.
        </li>
      </ul>

      <h2>5. Cookies & Tracking</h2>
      <p>IssIdee may use cookies and similar tracking technologies to improve your experience.</p>

      <h2>6. Data Security</h2>
      <p>
        We take appropriate security measures to protect your data. However, no method of transmission over the internet
        is 100% secure.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Request access to your personal data.</li>
        <li>Request deletion of your data.</li>
        <li>Opt-out of certain data collection.</li>
      </ul>

      <h2>8. Contact</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p>
        <strong>Developer:</strong> Bea Pitzschke <br />
        <a
          href="https://www.linkedin.com/in/beapitzschke/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/BeaCoden"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
      </p>

      <h2>9. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. Please check back for updates.</p>
    </div>
  );
};

export default PrivacyPolicy;
