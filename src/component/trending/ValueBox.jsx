import React from 'react'
import BoxItem from '../box/BoxItem'
import './valuebox.css'
import ViewDetails from '../viewdetail/ViewDetails'
import Primary from '../primarytoken/Primary'
import Ours from '../ourvalues/Ours'
const ValueBox = () => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-1">
                </div>
                <div className="col-sm-2 mklock">
                    <BoxItem boxwidth='50px' boxheight='50px' pboxwidth='13px' pboxheight='12px' />
                    <div style={{ marginTop: '-48px', marginLeft: '76px' }}>Total Market Locked </div>
                    <div style={{ marginTop: '7px', marginLeft: '73px' }}>$75188389</div>
                </div>
                <div className="col-sm-2 mklock" style={{ marginLeft: "40px" }}>
                    <BoxItem boxwidth='50px' boxheight='50px' pboxwidth='13px' pboxheight='12px' />
                    <div style={{ marginTop: '-48px', marginLeft: '76px' }}>Total Volume</div>
                    <div style={{ marginTop: '7px', marginLeft: '73px' }}>$75188389</div>
                </div>
                <div className="col-sm-2 mklock" style={{ marginLeft: "40px" }}>
                    <BoxItem boxwidth='50px' boxheight='50px' pboxwidth='13px' pboxheight='12px' />
                    <div style={{ marginTop: '-48px', marginLeft: '76px' }}>Total Market Cap  </div>
                    <div style={{ marginTop: '7px', marginLeft: '73px' }}>$75188389</div>
                </div>
                <div className="col-sm-2 mklock" style={{ marginLeft: "40px" }}>
                    <BoxItem boxwidth='50px' boxheight='50px' pboxwidth='13px' pboxheight='12px' />
                    <div style={{ marginTop: '-48px', marginLeft: '76px' }}>Total Parameters</div>
                    <div style={{ marginTop: '7px', marginLeft: '73px' }}>$75188389</div>
                </div>
            </div>
            {/* trending Tokens  */}
            <div style={{ marginTop: '55px', color: 'white', fontSize: '100px', marginLeft: '400px', fontWeight:1000 }}>Trending Tokens</div>

            {/* after trrending token  */}

            <div className="row" style={{ marginLeft: '100px', marginTop: '20px', border: '2px solid green', marginRight: '120px' }}>

                <div className="col-sm-3" style={{ display: 'flex', padding: '20px' }}>
                    <div className='boxitem'></div>
                    <div >
                        <div style={{ marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>FTM</div>
                        <div style={{ marginLeft: '20px', color: 'white' }}>$0.3911</div>
                    </div>
                    <div style={{ marginLeft: '20px', color: 'white', width: '60px', height: '40px', border: '2px solid green', textAlign: 'center', borderRadius: '8px', padding: '5px' }}>
                        1.64%
                    </div>
                </div>
                <div className="col-sm-3" style={{ display: 'flex', padding: '20px' }}>
                    <div className='boxitem'></div>
                    <div >
                        <div style={{ marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>FTM</div>
                        <div style={{ marginLeft: '20px', color: 'white' }}>$0.3911</div>
                    </div>
                    <div style={{ marginLeft: '20px', color: 'white', width: '60px', height: '40px', border: '2px solid green', textAlign: 'center', borderRadius: '8px', padding: '5px' }}>
                        1.64%
                    </div>
                </div>
                <div className="col-sm-3" style={{ display: 'flex', padding: '20px' }}>
                    <div className='boxitem'></div>
                    <div >
                        <div style={{ marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>FTM</div>
                        <div style={{ marginLeft: '20px', color: 'white' }}>$0.3911</div>
                    </div>
                    <div style={{ marginLeft: '20px', color: 'white', width: '60px', height: '40px', border: '2px solid green', textAlign: 'center', borderRadius: '8px', padding: '5px' }}>
                        1.64%
                    </div>
                </div>
                <div className="col-sm-3" style={{ display: 'flex', padding: '20px' }}>
                    <div className='boxitem'></div>
                    <div >
                        <div style={{ marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>FTM</div>
                        <div style={{ marginLeft: '20px', color: 'white' }}>$0.3911</div>
                    </div>
                    <div style={{ marginLeft: '20px', color: 'white', width: '60px', height: '40px', border: '2px solid green', textAlign: 'center', borderRadius: '8px', padding: '5px' }}>
                        1.64%
                    </div>
                </div>
            </div>
            <div className='boxname'>
            </div>

            {/* second Box  */}
            <div className="row" style={{ marginLeft: '100px', border: '2px solid green', marginRight: '120px' }}>

                <div className="col-sm-3" style={{ display: 'flex', padding: '20px' }}>
                    <div className='boxitem'></div>
                    <div >
                        <div style={{ marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>FTM</div>
                        <div style={{ marginLeft: '20px', color: 'white' }}>$0.3911</div>
                    </div>
                    <div style={{ marginLeft: '20px', color: 'white', width: '60px', height: '40px', border: '2px solid green', textAlign: 'center', borderRadius: '8px', padding: '5px' }}>
                        1.64%
                    </div>
                </div>
                <div className="col-sm-3" style={{ display: 'flex', padding: '20px' }}>
                    <div className='boxitem'></div>
                    <div >
                        <div style={{ marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>FTM</div>
                        <div style={{ marginLeft: '20px', color: 'white' }}>$0.3911</div>
                    </div>
                    <div style={{ marginLeft: '20px', color: 'white', width: '60px', height: '40px', border: '2px solid green', textAlign: 'center', borderRadius: '8px', padding: '5px' }}>
                        1.64%
                    </div>
                </div>
                <div className="col-sm-3" style={{ display: 'flex', padding: '20px' }}>
                    <div className='boxitem'></div>
                    <div >
                        <div style={{ marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>FTM</div>
                        <div style={{ marginLeft: '20px', color: 'white' }}>$0.3911</div>
                    </div>
                    <div style={{ marginLeft: '20px', color: 'white', width: '60px', height: '40px', border: '2px solid green', textAlign: 'center', borderRadius: '8px', padding: '5px' }}>
                        1.64%
                    </div>
                </div>
                <div className="col-sm-3" style={{ display: 'flex', padding: '20px' }}>
                    <div className='boxitem'></div>
                    <div >
                        <div style={{ marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>FTM</div>
                        <div style={{ marginLeft: '20px', color: 'white' }}>$0.3911</div>
                    </div>
                    <div style={{ marginLeft: '20px', color: 'white', width: '60px', height: '40px', border: '2px solid green', textAlign: 'center', borderRadius: '8px', padding: '5px' }}>
                        1.64%
                    </div>
                </div>
            </div>

            {/* 4 view Dettails Box */}
            <div style={{ marginLeft: '100px', marginRight: '100px', marginTop: '200px',position:'sticky' }}>
                <div className="row">
                    <div className="col-sm-3"><ViewDetails  /></div>
                    <div className="col-sm-3"><ViewDetails /></div>
                    <div className="col-sm-3"><ViewDetails  /></div>
                    <div className="col-sm-3"><ViewDetails /></div>
                </div>
            </div>
            {/* primary tokenStarts Here..............  */}
            <div style={{ backgroundColor: 'green', marginTop: '100px', marginBottom: "100px", width: '100%', height: '460px' }}>
                <Primary />
            </div>
        {/* our vlues start Here  */}

            <div  style={{marginTop:'500px' ,marginLeft:'100px',marginRight:'100px'}}>
                    <Ours />

            </div>
        </div>
    )
}

export default ValueBox