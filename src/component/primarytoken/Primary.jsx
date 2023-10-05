import React from 'react'
import './primary.css'
import PrimaryBox from './PrimaryBox'



const Primary = () => {
  return (
    <div className='primaryContainer'>
      <div className='primarytext'>Primary Tokens</div>
      
      <div className='rotate'><PrimaryBox fcomment='Staking Tool' scomment='Earn Partnet Tokens by staking Bananas or Gnaana' colorDetails='rgb(133 205 133)' bordecol='18px solid rgb(133 205 133)' fuc='FRUI' suc='CHRP'fucf='55.65%' sucf='29.65' /></div>

      <div className='rotate1'><PrimaryBox fcomment='Yield Farm' scomment='Earn Bananna Partner token by staking LP TOKENS' colorDetails='rgb(133 205 133)' bordecol='18px solid rgb(133 205 133)' fuc='PSTN'  suc='FRUIT' fucf='50.65%' sucf='55.65' /></div>

      <div className='rotate2'><PrimaryBox fcomment='Network' scomment='Earn Intrest by supplying popular TOKENs' colorDetails='rgb(133 205 133)' bordecol='18px solid rgb(133 205 133)' fuc='BLID-USD'  suc='ICH-BNB' fucf='22.65%' sucf='52.65'  /></div>

      <div className='rotate3'><PrimaryBox fcomment='Treasuary Bills' scomment='Create Protocol- owened liquidity wirth yield-generating NFTs' colorDetails='rgb(133 205 133)' bordecol='18px solid rgb(133 205 133)' fuc='LEAP'  suc='FRUIT' fucf='4.65%' sucf='41.65' /></div>
    </div>
  )
}

export default Primary