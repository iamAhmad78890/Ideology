import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="container">
      <footer class="site-footer">
        <div class="container-fluid">
          <div class="row text-center">
            <div class="col-md-12 col-lg-2  ">
              <img src="./Images/Ideaology-Logo (1).png" alt="" />
              <div className="text-center">
                <p class="copyright">
                  Copyrights @ 2022 Ideaology.io All Rights Reserved
                </p>
              </div>
            </div>
            <div class="col-md-12 col-lg-2">
              <h6>Company</h6>
              <ul class="footer-links">
                <li>
                  <a>Apply for IDO</a>
                </li>
              </ul>
            </div>{" "}
            <div class="col-md-12 col-lg-2">
              <h6>Help</h6>
              <ul class="footer-links">
                <li>
                  <a> Contact Us</a>
                </li>
                <li>
                  <a> Terms</a>
                </li>
                <li>
                  <a> Privacy</a>
                </li>
              </ul>
            </div>
            <div class="col-md-12 col-lg-2">
              <h6>Developers</h6>
              <ul class="footer-links">
                <li>
                  <a>Documentations</a>
                </li>
              </ul>
            </div>
            <div class="col-md-12 col-lg-2">
              <h6>Social Media</h6>
              <div className="social_media_icons">
                <img src="./Images/Vector (31).png" alt="" />
                <img src="./Images/Medium.png" alt="" />
                <img src="./Images/Telegram.png" alt="" />
                <img src="./Images/Twitter.png" alt="" />
              </div>
            </div>
            <div class="col-md-6 col-lg-2">
              <h6>Audited by</h6>
              <div>
                <img src="./Images/image 12 (Traced).png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
