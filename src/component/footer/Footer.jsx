import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='marginall'>
        <div className="row">
            <div className="col-sm-3">
                <div className='ape'>ApeSwap</div>
                <div>ApeSwap is Multichanin Defi Hub Offering An Accessible, Transparent, And Secure Experience for Everyone.</div>
                <div style={{display:'flex'}}>
                    <div className="circleone"></div>
                    <div className="circleone"></div>
                    <div className="circleone"></div>
                    <div className="circleone"></div>
                </div>
            </div>
            <div className="col-sm-3">
            <div className='ape1 my-4'>Support</div>
                    <div>FAQ</div>
                    <div className='my-4'>Discord</div>
                    <div className='my-4'>Tokenomics</div>
                    <div className='my-4'>Audits</div>
            </div>
            <div className="col-sm-3">
            <div className='ape1 my-4'>Engage</div>
            
                    <div className='my-4'>Goverence</div>
                    <div className='my-4'>Partner Application</div>
                    <div className='my-4'>Bug Boundary</div>
                    <div className='my-4'>Devlopers Grand</div>
            </div>
            <div className="col-sm-3">
            <div className='ape1 my-4'>Access</div>
            <div className='my-4'>Docs</div>
            <div className='my-4'>Merch</div>
            <div className='my-4'>ApeTv Prodcast</div>
            <div className='my-4'>Github</div>
            </div>
            <div className='borderline'> </div>
            <p className='allright'>&copy;2023 ApeSwap. All Reserved</p>
        </div>
    </div>   
  )
}

export default Footer