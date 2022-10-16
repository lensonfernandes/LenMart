import React from 'react'
import Button from 'react-bootstrap/Button';

function Mainsection() {
  return (
    <div className="mainsection">
        <div className='banner'>
            <div className='left'>
                <h2>
                    Ready, Set, Shop!!!
                </h2>
                <h3>
                    Enjoy free shipping on any order size + free grocery delivery.*
                </h3>
                <button> Try free for 30 days</button>
                <Button variant="primary">Primary</Button>{' '}
            </div>
            <div className='right'>
                <img  src="https://i5.walmartimages.com/dfw/4ff9c6c9-e59e/k2-_d31fef22-0bd0-431d-a783-73c5d3496bff.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70" alt="" /> 
            </div>
        </div>
        <div className='prodOfDay'>
        </div>
    </div>
  )
}

export default Mainsection