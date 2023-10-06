import React from 'react'
import BoxItem from '../box/BoxItem'
import ValueBox from '../trending/ValueBox'
import Lunach from '../launchcalender/Lunach'
import Footer from '../footer/Footer'


const Defi = () => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '50px', marginLeft: "100px" }}>
                <div className='welc'>Welc</div>
                <BoxItem boxwidth='6vw' boxheight='6vw' pboxwidth='54px' pboxheight='6px' />
                <div className='welc'>ME</div>
                <BoxItem boxwidth='6vw' boxheight='6vw' pboxwidth='49px' pboxheight='8px' />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginLeft: "100px" }}>
                <div ><div className='welc' style={{ marginLeft: "350px",marginTop:'-70px' }}>To</div><div className='welc' style={{ marginLeft: "350px",marginTop:'-70px' }}>Connected</div> </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: "100px"  }}>
                <div className='welc' style={{marginTop:'-70px'}}>Defi Hub!</div>
            </div>
            <div>
                <div className='row'>
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-2">
                    <BoxItem boxwidth='200px' boxheight='200px' pboxwidth='-16px' pboxheight='8px' />
                    </div>
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-6" style={{color:'white',fontSize:'25px'}}>
                     Wether You are new To Crypto or you Are Defi Veteran, ApeSwap Has the Tool, Community, And Connection to Support to Your Decenterilization Finance Needs.
                     <div className="row">
                        <div className="col-4 my-4">
                            <button style={{borderRadius:'4px',backgroundColor:'green',color:'white',border:'2px solid white'}}>Join Ape in</button>
                        </div>
                        <div className="col-6 my-4">
                                <button style={{borderRadius:'4px',backgroundColor:'green',color:'white',border:'2px solid white'}}>Learn More</button>
                        </div>
                     </div>
                </div>
                    </div>
            </div>
            {/* background Color change here  */}
                <div style={{backgroundColor:'rgb(54, 204, 54)', borderRadius:'100px', width:'100%', height:'2850px', marginTop:'120px'}}>
            
                    <ValueBox />
                </div>
            {/* backgroun Ends here start Launch Calender  */}
            <div style={{marginTop:'200px', marginRight:'10px',marginLeft:'100px'}} >
                <Lunach />
            </div>
            <div  className='appcom'>
                 <Footer />
                </div>
        </div>
    )
}

export default Defi