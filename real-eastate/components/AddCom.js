import React from 'react'

const HOME_RHS_TOP_AD = '/13276288/jagran/desktop/Prime/Home/Top_300x250';
const HOME_RHS_MID_AD = '/13276288/jagran/desktop/Prime/Listing/Medium_300x250';
const HOME_RHS_BOTTOM_AD = '/13276288/jagran/desktop/Prime/Listing/Bottom_300x250';

const HOME_RHS_TOP_AD_MOBILE = '/13276288/jagran/mobile/Prime/Listing/Top_300x250';
// const HOME_RHS_MEDIUM_AD_MOBILE = '/13276288/jagran/mobile/Prime/Listing/Medium_300x250';
// const HOME_RHS_BOTTOM_AD_MOBILE = '/13276288/jagran/mobile/Prime/Listing/Bottom_300x250';


    
class AddCom extends React.Component {
    
    componentDidMount() {
        let widthWindow=window.innerWidth;
        console.log("Hi "+widthWindow);
    
                
        googletag.cmd.push(function() {
            // let width = '100px'
            if (widthWindow>=980) {
            alert(widthWindow);
            googletag.defineSlot(HOME_RHS_TOP_AD, [[300, 250], [300, 200], [250, 250]], 'rhs_top_300x250').addService(googletag.pubads());
            googletag.defineSlot(HOME_RHS_MID_AD, [[300, 250], [300, 200], [250, 250]], 'rhs_Mid_300x250').addService(googletag.pubads());
            googletag.defineSlot(HOME_RHS_BOTTOM_AD, [[300, 250], [300, 200], [250, 250]], 'rhs_Bottom_300x250').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            googletag.cmd.push(function() { googletag.display('rhs_top_300x250', 'rhs_Mid_300x250', 'rhs_Bottom_300x250'); });

        } else{
            //if(width == '100px'){
                alert(widthWindow);
                googletag.defineSlot(HOME_RHS_TOP_AD_MOBILE, [[300, 250], [300, 200], [250, 250]], 'rhs_top_mo_300x250').addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
                googletag.cmd.push(function() { googletag.display('rhs_top_mo_300x250'); });

            }
            // googletag.defineSlot(HOME_RHS_MEDIUM_AD_MOBILE, [[300, 250], [300, 200], [250, 250]], 'rhs_Bottom_mo_300x250').addService(googletag.pubads());
            // googletag.defineSlot(HOME_RHS_BOTTOM_AD_MOBILE, [[300, 250], [300, 200], [250, 250]], 'rhs_Bottom_mo_300x250').addService(googletag.pubads());
        
        //     if (widthWindow>=980) {
        //         googletag.cmd.push(function() { googletag.display('rhs_top_300x250', 'rhs_Mid_300x250', 'rhs_Bottom_300x250'); });
        //     } else {
        // googletag.cmd.push(function() { googletag.display('rhs_top_mo_300x250'); });
        //     }
        });
            // googletag.defineSlot(HOME_RHS_TOP_AD_MOBILE, [[300, 250], [300, 200], [250, 250]], 'rhs_Bottom_mo_300x250').addService(googletag.pubads());
            
        //googletag.cmd.push(function() { googletag.display('rhs_top_300x250'); });
        // googletag.cmd.push(function() { googletag.display('rhs_top_300x250', 'rhs_Mid_300x250','rhs_Bottom_300x250'); });
        // googletag.cmd.push(function() { googletag.display('rhs_top_mo_300x250', 'rhs_Mid_mo_300x250','rhs_Bottom_mo_300x250'); });
    }
 
    render() {
        return (
            <>
<div id="HomeRHStopAdsComp" className='mb20 ads300'>
<div id="rhs_top_300x250" style={{ width: '300px', height: '250px' }} />
</div>



<div id="HomeRHSMidAdsComp" className='mb20 ads300'>
<div id="rhs_Mid_300x250" style={{ width: '300px', height: '250px' }} />
</div>

<div id="HomeRHSBottomAdsComp" className='mb20 ads300'>
<div id="rhs_Bottom_300x250" style={{ width: '300px', height: '250px' }} />
    </div>

<div id="HomeRHStopAdsComp" className='mb20 ads300'>
<div id="rhs_top_mo_300x250" style={{ width: '300px', height: '250px' }} />
</div>
   {/*


<div id="HomeRHSMidAdsComp" className='mb20 ads300'>
<div id="rhs_Mid_mo_300x250" style={{ width: '300px', height: '250px' }} />
    </div>

<div id="HomeRHSBottomAdsComp" className='mb20 ads300'>
<div id="rhs_Bottom_mo_300x250" style={{ width: '300px', height: '250px' }} />
    </div> */}
    </>

        );
    }
}

export default AddCom; 