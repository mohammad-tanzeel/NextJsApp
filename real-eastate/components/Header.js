import React, { useState } from 'react'
//import Navbar from './Navbar'

//Show hide 1
function Header() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
//show end1
  return (
	<header>      
    <div className='container'>
      
    <span className='menuIcon menu' onClick={toggle}><small></small><small></small><small></small></span>
    <a href="/" title="naidunia" className='logo'>Property Logo</a>
    
       
    </div>
    {/* //Show hide 2 */}
    <div className='ShowDiv' style={{display: showMe?"block":"none"}}>
	<div class="sidebar-box" id="sidebar-box">
					<div class="hamberger-box" onclick="sideMenu()"> <button class="hamberger-menu"></button> </div>
					<div class="sidebar">
					<button className='close-btn' onClick={toggle}></button>
					  <div class="search-box">						  
					<input type="text" class="search-txt" placeholder="Search"></input>
						<button class="search"><svg fill="none" height="24" stroke="#f7f7f8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="7.5"></circle> <line x1="21" x2="15.8" y1="21" y2="15.8"></line> </svg></button>
					  </div>
					  <div class="sidebar-menu">
						<div class="directLink"><a href="#" title="HOME">HOME</a></div>
						<div class="directLink"><a href="#" title="ELECTIONS">ELECTIONS</a></div>
						<div class="directLink"><a href="#" title="INDIA">INDIA</a></div>
						<div class="directLink"><a href="#" title="WORLD">WORLD</a></div>
						<div class="directLink">
							<a href="javascript:void(0)" title="NORTH EAST INDIA" class="dropdown-menu">NORTH EAST INDIA</a>
						  <div class="dropdown-item">
							  <a href="#" title="Arunachal Pradesh">Arunachal Pradesh</a>
							  <a href="#" title="Mizoram">Mizoram</a>
							  <a href="#" title="Assam">Assam</a>
							  <a href="#" title="Nagaland">Nagaland</a>
							  <a href="#" title="Manipur">Manipur</a>
							  <a href="#" title="Meghalaya">Tripura</a>
							  <a href="#" title="Meghalaya">Meghalaya</a>
						  </div>
						</div>          
						<div class="directLink">
							<a href="javascript:void(0)" title="NORTH EAST INDIA" class="dropdown-menu">PHOTOS</a>
						  <div class="dropdown-item">
							  <a href="#" title="Actor">Actor</a>
							  <a href="#" title="Nature">Nature</a>
							  <a href="#" title="Food">Food</a>
							  <a href="#" title="Flower">Flower</a>
							  <a href="#" title="Health">Health</a>
							  <a href="#" title="Meghalaya">Tripura</a>
						  </div>
						</div>
						<div class="directLink">
							<a href="javascript:void(0)" title="VIDEOS" class="dropdown-menu">VIDEOS</a>
						  <div class="dropdown-item">
							  <a href="#" title="Actor">Education</a>
							  <a href="#" title="Nature">Property</a>
							  <a href="#" title="Food">Food</a>
							  <a href="#" title="Flower">Flower</a>
							  <a href="#" title="Health">Health</a>
							  <a href="#" title="Meghalaya">Tripura</a>
						  </div>
					   </div>
					  </div>
					</div>
					<div class="overlay" onclick="sideMenu()"></div>
					
				</div>
          </div>
      <div className='overlay'  onClick={toggle} style={{
        display: showMe?"block":"none"}}>Overlay</div>



      {/* ////Show hide end 2 */}
    </header>
    
  )

  
}

export default Header