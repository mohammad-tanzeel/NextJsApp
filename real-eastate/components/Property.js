import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Script from 'next/script';
import Slider from './Slider';


export default function Property() {
  return (
    <><div id="wrapper">
      
      <div id="mainCntr">
         {/* < />!--  \ property / --> */}
        <main id="contentCntr">
          <div class="sectionBox centered">
            <article class="leftsection">
              <Slider></Slider>              
              <div class="contetBody">
                <h1>Ruby Park Co Operative Housing Society, Pragathi Nagar</h1>
                <p>Rs. 29,00,000 onwards</p>
                <p>By Agent: <span>Rajiv Bhatia</span></p>
                <div class="socailIcon"><a href="#" class="social-btn"><img src="images/facebook.svg" alt=""/></a> <a href="#" class="social-btn"><img src="images/instagram.png" alt=""/></a> <a href="#" class="social-btn"><img src="images/twitter.svg" alt=""/></a> <a href="#" class="social-btn"><img src="images/whatsapp.svg" alt=""/></a> <a href="#" class="social-btn fr"><img src="images/group-260.svg" alt=""/></a></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div class="request"><a href="#" class="button" title="Request a call back"><img src="images/phone-call.svg" alt="Request a call back" /> Request a call back</a> <a href="#" class="button nobg" title="Book a Site Visit">Book a Site Visit</a> <a href="#" class="button nobg" title="Send Enquiry">Send Enquiry</a></div>


              </div>
              <div class="detailBox">
                <div class="innerbox">
                  <h2>Details</h2>
                  <ul class="">
                    <li><span>Location</span> Pragathi Nagar           </li>
                    <li><span>Parking</span>  Yes 3 Vehicles</li>
                    <li><span>Lift</span> Yes</li>
                    <li><span>Floor Number</span> 7th (Total 19)</li>
                    <li><span>Covered Area (sqft)</span> 1588 sqft</li>
                    <li><span>Width</span> 40</li>
                    <li><span>Length</span> 39</li>
                    <li><span>Bedrooms</span> 3</li>
                    <li><span>Flooring</span> Marble and wooden</li>
                    <li><span>Furnishing</span> Unfurnished</li>
                    <li><span>Configuration</span> 3 Bathroom, 2 Balcony, 1 Pooja Room, 1 Servant room</li>
                    <li><span>Construction Status</span> Under Construction</li>
                    <li><span>Facing</span> East</li>
                  </ul>
                </div>
                <div class="innerbox">
                  <h2>Additional Details</h2>
                  <ul>
                    <li><span>Maintenance  </span> 2499 Per Month</li>
                    <li><span>Other Facilities</span> Power Backup</li>
                    <li><span>Other Charges</span> Reserved Parking No</li>
                  </ul>
                </div>
              </div>

            </article>

            <article class="rightsection">
              <div class="prop_locator">
                <div class="title"><h3>Property Locator</h3></div>
                <div class="commonL"><div class="image"><img alt="" src="images/img_gmap_1.jpg" width="364" height="100%" /></div></div>
              </div>

              <div class="prop_locator mtop">
                <div class="title"><h3>Property Locator</h3> <a href="#" class="view">View All &gt;&gt;</a></div>
                <div class="commonL">
                  <div class="image"><img alt="" src="images/img_prop_1.jpg" width="364" height="100%" /><div class="detail">2,3,4 BHK</div></div>
                  <div class="text">
                    <h6>Ruby Park Co Operative Housing Society, Saket</h6>

                    <div class="price">Rs. 29,00,000 onwards</div>
                  </div>

                </div>
                <div class="commonL mtop mbot">
                  <div class="image"><img alt="" src="images/img_prop_1.jpg" width="364" height="100%" /><div class="detail">2,3,4 BHK</div></div>
                  <div class="text">
                    <h6>Ruby Park Co Operative Housing Society, Saket</h6>

                    <div class="price">Rs. 29,00,000 onwards</div>
                  </div>

                </div>
              </div>
            </article>

          </div>
          <div class="properyN">
            {/* < />!--  / propertie box \ --> */}
            <div class="propertieBox centered">
              <div class="title">
                <h3>New Properties</h3>

                <a href="#" class="view">View All </a>
              </div>

              <div class="block">
                <div class="item">
                  <div class="card-propertie">
                    <div class="image">
                      <img src="images/img_prop_172.jpg" alt=""/></div>

                    <div class="text">
                      <h6>Ruby Park Co Operative Housing Society, Saket</h6>

                      <div class="price">Rs. 29,00,000 onwards</div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="card-propertie">
                    <div class="image">
                      <img src="images/img_prop_172.jpg" alt=""/></div>

                    <div class="text">
                      <h6>Ruby Park Co Operative Housing Society, Saket</h6>

                      <div class="price">Rs. 29,00,000 onwards</div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="card-propertie">
                    <div class="image">
                      <img src="images/img_prop_172.jpg" alt=""/></div>

                    <div class="text">
                      <h6>Ruby Park Co Operative Housing Society, Saket</h6>

                      <div class="price">Rs. 29,00,000 onwards</div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="card-propertie">
                    <div class="image">
                      <img src="images/img_prop_172.jpg" alt=""/></div>

                    <div class="text">
                      <h6>Ruby Park Co Operative Housing Society, Saket</h6>

                      <div class="price">Rs. 29,00,000 onwards</div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="card-propertie">
                    <div class="image">
                      <img src="images/img_prop_172.jpg" alt=""/></div>

                    <div class="text">
                      <h6>Ruby Park Co Operative Housing Society, Saket</h6>

                      <div class="price">Rs. 29,00,000 onwards</div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="card-propertie">
                    <div class="image">
                      <img src="images/img_prop_172.jpg" alt=""/></div>

                    <div class="text">
                      <h6>Ruby Park Co Operative Housing Society, Saket</h6>

                      <div class="price">Rs. 29,00,000 onwards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* < />!--  \ propertie box / --> */}
          </div>
        </main>
        {/* < />!--  \ property / --> */}

      </div>
      {/* < />!--  \ main container / --> */}

    </div>
    {/* < /></>!--  \ wrapper / --> */}
    
				        </>
  )
}

