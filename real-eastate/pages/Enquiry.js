import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Script from 'next/script';
// import Slider from '../components/Slider';


export default function Enquiry() {
  return (
    <><div id="wrapper">
      
      Test
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
                        <li class="alignL"><input type="text" id="email" name="email" value="Email ID" onblur="if(this.value=='') this.value='Email ID';" onfocus="if(this.value=='Email ID') this.value='';"/></li>
                        <li class="alignL1"><span>
                          <select name="cars" id="cars">
  <option value="volvo">Ind +91</option></select></span> <span>
    <input type="text" id="phone_numer" name="phone_numer" value="Mobile Number" onblur="if(this.value=='') this.value='Mobile Number';" onfocus="if(this.value=='Mobile Number') this.value='';"/></span></li> 
    <li class="alignL"><textarea style={{"max-width": "370px", "width":"100%"}} name='message'></textarea></li>  
                        
                        <li><button class="loginbtnS">Signup</button></li>
                        </ul>
                    
                </div>
            </div>
          </div>
        </main>
        {/* < />!--  \ property / --> */}

        <Footer></Footer>
      </div>
      {/* < />!--  \ main container / --> */}

    </div>
    {/* < /></>!--  \ wrapper / --> */}
    
				        </>
  )
}

