import React from 'react'
import './navbar.css'
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    return (
        <div className='flexbox1' >
            <ul>
                <li  className='navfirst'>LoGo</li>
                <li>Exchange</li>
                <li>Stake</li>
                <li>Raise</li>
                <li>Collect</li>
                <li>Lend</li>
                <li>Explore</li>
            </ul>
            <div className='folder'>
            <FolderCopyIcon style={{color:'white',fontSize:'30px'}}/>
            </div>
            <div className='folder1 m-2'><LanguageIcon style={{color:'white',fontSize:'30px'}}/></div>
            <div className='arrowmove'>BNB<ArrowDropDownIcon style={{color:'white',fontSize:'30px'}} /> </div>
           
            <div className='buttonhan'>
            <button className='burttonclass mx-4' >Connect</button>
                
            </div>
        </div>
    )
}

export default Navbar