import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Script from 'next/script';
import Slider from './Slider';


export default function Enquiry() {
  return (
    <><div id="wrapper">
      
      <div id="mainCntr">
        {/* < />!--  / header \ --> */}
            <Header></Header>

        {/* < />!--  \ property / --> */}
        <main id="contentCntr">
          <div class="sectionBox centered">
            {/* < />!--  \ propertie box / --> */}

            <div class="profile">
            	<div class="loginBox">
                	<ul>
                    	<li><img src="images/logo-1.gif" alt="Logo"/></li>
                        <li><span><label><input type="checkbox" id="buyer" name="buyer" value="Bike"/></label><b>Buyer/Owner</b></span>  <span>
                          <label><input type="checkbox" id="agent" name="agent" value="Bike"/></label>Agent</span> <span><label><input type="checkbox" id="builder" name="builder" value="Bike"/></label>Builder</span></li>
                        <li class="alignL"><input type="text" id="fname" name="fname" value="Name" onblur="if(this.value=='') this.value='Name';" onfocus="if(this.value=='Name') this.value='';"/></li>
                        <li class="alignL"><input type="text" id="fname" name="fname" value="Email ID" onblur="if(this.value=='') this.value='Email ID';" onfocus="if(this.value=='Email ID') this.value='';"/></li>
                        <li class="alignL"><input type="text" id="fname" name="fname" value="Password" onblur="if(this.value=='') this.value='Password';" onfocus="if(this.value=='Password') this.value='';"/></li>
                        <li class="alignL1"><span><select name="cars" id="cars">
  <option value="volvo">Ind +91</option></select></span> <span><input type="text" id="fname" name="fname" value="Mobile Number" onblur="if(this.value=='') this.value='Mobile Number';" onfocus="if(this.value=='Mobile Number') this.value='';"/></span></li> 
                        <li><button class="loginbtnS">Signup</button></li>
                        </ul>
                    
                </div>
            </div>
          </div>
        </main>
        {/* < />!--  \ property / --> */}

        {/* < />!--  / footer container \ --> */}
        <Footer></Footer>
        {/* < />!--  \ footer container / --> */}
      </div>
      {/* < />!--  \ main container / --> */}

    </div>
    {/* < /></>!--  \ wrapper / --> */}
    
				        </>
  )
}

