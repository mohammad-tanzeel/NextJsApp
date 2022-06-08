import React from 'react'

export default function Footer() {
  return (
    <footer id="footerCntr" class="centered">
          <div class="left">
            <a href="#" class="logo"><img src="images/logo.png" alt=""/></a>

            <div class="contact">
              <h4>Contact us</h4>

              <address>
                <span>Phone -</span> <a href="#">99xxxxxx99</a><br/>
                  <span>Email -</span> <a href="#">yourcompany@yourdomain.com</a>
                </address>

              <ul class="social">
                <li><a href="#"><i class="icon-facebook"></i></a></li>
                <li><a href="#"><i class="icon-twitter"></i></a></li>
                <li><a href="#"><i class="icon-instagram"></i></a></li>
              </ul>
            </div>
          </div>

          <div class="right">
            <ul class="link">
              <li><a href="#">Others</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>

            <div class="copyright">All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2021 Your Company</div>
          </div>
        </footer>
  )
}
