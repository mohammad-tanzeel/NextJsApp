import {useState, React} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Script from 'next/script';
// import Slider from '../components/Slider';


export default function Enquiry() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('Sending')

  let data = {
      name,
      email,
      message
  }
  console.log(data);

}

  return (
    <><div id="wrapper">      
      <div id="mainCntr">
        {/* < />!--  / header \ --> */}
            <Header></Header>

        {/* < />!--  \ property / --> */}
        <main id="contentCntr">
          <div>Zakir</div>
          <div class="sectionBox centered">
            {/* < />!--  \ propertie box / --> */}

            <div class="profile">
            	<div class="loginBox">
                	<ul>
                    	<li><img src="images/logo-1.gif" alt="Logo"/></li>
                        <li class="alignL"><input  type="text" id="name" name="name" placeholder='Name'/></li>
                        <li class="alignL"><input onChange={(e)=>{setEmail(e.target.value)}} type="text" id="email" name="email" placeholder="Email ID" onblur="if(this.value=='') this.value='Email ID';" onfocus="if(this.value=='Email ID') this.value='';"/></li>
                        {/* <li class="alignL1"><span>
                          <select name="cars" id="cars">
  <option value="volvo">Ind +91</option></select></span> <span>
    <input type="text" id="phone_numer" name="phone_numer" value="Mobile Number" onblur="if(this.value=='') this.value='Mobile Number';" onfocus="if(this.value=='Mobile Number') this.value='';"/></span></li>  */}
    <li class="alignL"><textarea onChange={(e)=>{setMessage(e.target.value)}} style={{"max-width": "370px", "width":"100%"}} name='message'></textarea></li>  
                        
                        <li><button onClick={(e)=>{handleSubmit(e)}} class="loginbtnS">Signup</button></li>
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

