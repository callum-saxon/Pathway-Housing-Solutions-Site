import React, { useState } from 'react';
import './App.css';
import phsLogo from './images/Pathway-Housing-Solutions-Building-Futures-big.png';
import keyInDoor from './images/key-in-door.jpg';
import aboutImage from './images/phs-cover-img.png'; // Replace this with the path to the image you want to use in the About Us section
import profilePic from './images/henri-baptiste-profile.jpg'; // Add this line for the profile picture
import fundVideo from './videos/twittervid.com_Notts_TV_2c03c8.mp4';  // Import the video
import videoThumbnail from './images/flo-interview.png';  // Import the thumbnail image
import greyscale from './images/greyscale-male.jpg';  // Import the thumbnail image

function App() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img src={phsLogo} alt="Pathway Housing Solutions Logo" className="logo-img" />
        </div>        
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Fundraising</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </nav>
        <button className="download-btn">Apply for Housing</button>
      </header>

      <section className="hero">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${keyInDoor})` }}
        >
          <div className="hero-text">
            <h1>Building Pathways to Affordable<br/>and Secure Housing!</h1>
            <p>Join us in creating lasting futures by providing affordable, sustainable housing solutions to individuals and families in need.<br/>Together, we build stronger communities and brighter tomorrows.</p>
            <div className="scroll-indicator">
              <span>🡣</span>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h2>£1600+</h2>
              <p>Raised for those in housing need and homeless!<br/>By Flo Baker</p>
            </div>
            <div className="stat">
              <h2>11,6K</h2>
              <p>Example Statistic</p>
            </div>
            <div className="stat">
              <h2>500+</h2>
              <p>Example Statistic</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <div className="about-content-wrapper">
          <div className="about-content">
            <div className="about-text">
              <p>
                Welcome to <strong>Pathway Housing Solutions</strong>, your dedicated partner in addressing housing challenges and homelessness. <strong>Our mission</strong> is to provide <strong>safe and affordable housing options</strong> to individuals and families in need, fostering long-term stability and community support.
              </p>
              <p>
                <strong>Empowering lives through secure housing</strong>, we're working tirelessly to ensure everyone has a place to call home. <strong>Our commitment to excellence drives our passion</strong> for making a meaningful difference in the lives of the people we serve.
              </p>
            </div>
            <div className="about-media">
              <img src={aboutImage} alt="About Us Housing" className="about-image" />
              <div className="quote">
                <p>“My research has enabled a wider section of the community to access material that has been academically scrutinised, providing an account of the power of collective action, and the role that place-based, community-led solutions could offer to marginalised communities. It presented a complementary historical account of a period in British history, researched through a non-white lens and utilising a mixed-method approach that includes oral history, archival material, and lived experience.”</p>
                <img src={profilePic} alt="Henri Baptiste" className="profile-pic" />
                <p><strong>Henri Baptiste</strong><br/>Founder of Pathway Housing Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="fund-info">
        <div className="info-heading">
          <h2>Pathway to Secure, Affordable Housing</h2>
          <p>
            Unlocking the future of secure, affordable housing with innovative,
            community-driven solutions. Our tailored approach is designed to meet
            your housing needs, foster stability, and empower individuals and
            families toward brighter futures.
          </p>
        </div>

        <div className="fund-info-boxes">
          <div className="info-box">
            <i class="fas fa-hands-helping fa-3x"></i>
            <h3>Empowering Communities</h3>
            <p>
              We believe that secure housing is the foundation for strong, thriving
              communities. Pathway Housing Solutions works to not only provide homes
              but also to foster environments where individuals and families can grow
              and succeed, creating lasting change for future generations.
            </p>
          </div>

          <div className="info-box">
            <i class="fas fa-home fa-3x"></i>
            <h3>Affordable Housing for All</h3>
            <p>
              Our mission is to ensure that everyone, regardless of their background or
              circumstances, has access to safe, affordable housing. With tailored
              solutions, Pathway Housing Solutions bridges the gap for individuals and
              families who need a secure place to call home.
            </p>
          </div>

          <div className="info-box">
            <i class="fas fa-lightbulb fa-3x"></i>
            <h3>Innovative Housing Models</h3>
            <p>
              At Pathway Housing Solutions, we are pioneering sustainable, cost-effective
              housing models that address the evolving needs of our communities. From green
              buildings to community-led initiatives, we are rethinking the future of
              affordable housing.
            </p>
          </div>
        </div>
      </section>

      <section className="urgent-fundraising">
        <h2>Urgent Fundraising!</h2>
        <p>Time is of the essence! Join our mission NOW to make an immediate impact. Every second counts!</p>

        <div className="fund-cards">
          <div className="fund-card">
            <img src="https://via.placeholder.com/500x300" alt="" />
              <div className="fund-details">
                <p><strong>Stay Connected to Hear About Our Next Fundraiser</strong></p>
                <h4>Coming Soon</h4>
                <hr className="fund-separator-empty" />
                <div className="fund-progress">
                  <span className="fund-amount"></span>
                  <span className="fund-status">Opening Soon...</span>
                </div>
              </div>
            </div>
          <div className="fund-card">
            <video controls width="100%" height="auto" poster={videoThumbnail} className="fund-video">
              <source src={fundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="fund-details">
              <p><strong>Story:</strong> "We see an ever increasing number of homeless people, each with an individual story to tell. All of us have a basic human right to feel warm and safe. Listening to the individual stories each unique. The time has now come for me to assist in providing something more tangible. This is why I want to raise money to help house the homeless and those struggling to find affordable places to live."</p>
              <h4>Flo Baker</h4>
              <hr className="fund-separator" />
              <div className="fund-progress">
                <span className="fund-amount">Total: £1,640</span>
                <span className="fund-status">Closed 30/12/2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p>Quickly find answers to common queries in our comprehensive FAQ section.</p>
        <div className={`faq-item ${openFAQ === 0 ? 'open' : ''}`} onClick={() => toggleFAQ(0)}>
          <div className="faq-title-container">
            <h3>What is Pathway Housing Solutions?</h3>
            <span className="toggle-sign"></span>
          </div>
          <p className={openFAQ === 0 ? 'open' : ''}>
            Pathway Housing Solutions is a non-profit organisation dedicated to providing affordable and secure housing to individuals and families in need.
          </p>
        </div>
        <div className={`faq-item ${openFAQ === 1 ? 'open' : ''}`} onClick={() => toggleFAQ(1)}>
          <div className="faq-title-container">
            <h3>Who does Pathway Housing Solutions help?</h3>
            <span className="toggle-sign"></span>
          </div>
          <p className={openFAQ === 1 ? 'open' : ''}>
            We assist individuals and families who are at risk of homelessness, low-income households, and those facing housing instability.
          </p>
        </div>
        <div className={`faq-item ${openFAQ === 2 ? 'open' : ''}`} onClick={() => toggleFAQ(2)}>
          <div className="faq-title-container">
            <h3>How can I apply for housing assistance?</h3>
            <span className="toggle-sign"></span>
          </div>
          <p className={openFAQ === 2 ? 'open' : ''}>
            You can apply for housing assistance by visiting our "Apply for Housing" section and filling out the necessary application forms.
          </p>
        </div>
        <div className={`faq-item ${openFAQ === 3 ? 'open' : ''}`} onClick={() => toggleFAQ(3)}>
          <div className="faq-title-container">
            <h3>How can I make a donation?</h3>
            <span className="toggle-sign"></span>
          </div>
          <p className={openFAQ === 3 ? 'open' : ''}>
            You can donate securely through our website by clicking the 'Donate' button or by contacting us directly for other methods.
          </p>
        </div>
        <div className={`faq-item ${openFAQ === 4 ? 'open' : ''}`} onClick={() => toggleFAQ(4)}>
          <div className="faq-title-container">
            <h3>How is my donation used?</h3>
            <span className="toggle-sign"></span>
          </div>
          <p className={openFAQ === 4 ? 'open' : ''}>
          Your donations directly support our housing programs, providing safe and affordable housing to those in need.
          </p>
        </div>
      </section>

      <section className="footer-image-section">
        <img src={greyscale} alt="Footer Image" className="footer-image" />
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
          <img src={phsLogo} alt="Pathway Housing Solutions Logo" className="footer-logo-img" />
            <p>Explore our extensive listings of properties, ranging from cozy apartments to luxurious estates, meticulously curated to cater to diverse tastes and lifestyles.</p>
          </div>
          <div className="footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Overview</a></li>
              <li><a href="/">Explore</a></li>
              <li><a href="/">Analytics</a></li>
              <li><a href="/">Unit</a></li>
              <li><a href="/">Payment</a></li>
            </ul>
          </div>
          <div className="footer-address">
            <h4>Address</h4>
            <p>6391 Elgin St. Celina, Delaware 10299</p>
            <p>3981 Ranchview Dr. Richardson, California 62639</p>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Email: UrbanNest@gmail.com</p>
            <p>Phone: (907) 555-0133</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Pathway Housing Solutions. All Rights Reserved. © Copyright 2024</p>
          <p><a href="/">Privacy Policy</a> | <a href="/">Terms Of Use</a></p>
        </div>
      </footer>

    </div>
  );
}

export default App;
