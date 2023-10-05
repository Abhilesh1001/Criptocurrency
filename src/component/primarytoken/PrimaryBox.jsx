import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './primarytoken.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const PrimaryBox = ({ colorDetails, bordecol, fcomment, scomment,fuc,fucf,suc,sucf }) => {
    return (
        <div>
            <div className='firstBox' style={{ position: 'relative', border: `${bordecol}` }}>
                <div style={{ zIndex: 2 }}>
                    <div className='circle' style={{ backgroundColor: `${colorDetails}` }}></div>
                    <div className='circle2' style={{ backgroundColor: `${colorDetails}`, }}></div>
                    <div className='circle3' style={{ backgroundColor: `${colorDetails}` }}></div>
                    <div className='circle4' style={{ backgroundColor: `${colorDetails}` }}></div>
                    <div className='star'><StarIcon style={{ color: 'white' }} /></div>
                    <div className='star1'><StarIcon style={{ color: 'white' }} /></div>
                    <div className='star2'><StarIcon style={{ color: 'white' }} /></div>
                    <div className='star3'><StarIcon style={{ color: 'white' }} /></div>
                </div>
                <div style={{ fontSize: '20px', color: 'White' }}>{fcomment}</div>
                <div style={{ fontSize: '15px', position: 'relative', top: '-236px', left: '27px', color: 'white' }}>{scomment}</div>
                <div className='square'>
                    <div className='squarepart1' >
                        <PanoramaFishEyeIcon style={{ color: 'white', fontSize:'40px'}} />
                        <div className='seconcircle'></div>
                        <PlayArrowIcon style={{ color: 'white',fontSize:'40px',position:'relative',left:'-30px' }}/>
                        <PanoramaFishEyeIcon style={{ color: 'white',fontSize:'40px',position:'relative',left:'-40px'}} />
                        <div className='buidusd'>
                            <div style={{color:'white'}}>{fuc}</div>
                            <div><span style={{color:'white'}}>APR:</span>{fucf}</div>
                        </div>
                    </div>
                    <div className='squarepart2'>
                        <PanoramaFishEyeIcon  style={{ color: 'white',fontSize:'40px',fontSize:'40px'}}/>
                        <div className='seconcircle'></div>
                        <PlayArrowIcon style={{ color: 'white',fontSize:'40px',fontSize:'40px',position:'relative',left:'-30px'}} />
                        <PanoramaFishEyeIcon style={{ color: 'white',fontSize:'40px',fontSize:'40px',position:'relative',left:'-40px'}} />
                        <div className='buidusd'>
                            <div style={{color:'white'}}>{suc}</div>
                            <div><span style={{color:'white'}}>APR:</span> {sucf}</div>
                        </div>

                    </div>
                </div>
                <div className='viewdetails'>More Details<ArrowRightAltIcon /></div>

            </div>
        </div>  
    )
}

export default PrimaryBox