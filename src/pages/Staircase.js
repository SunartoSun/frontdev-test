import React, { useState } from 'react'
import logo from '../logo.svg';

const Staircase = () => {
    const [steps, setSteps] = useState(0)
  
    const handleClick = (steps) => {
        for (let i = 0; i < steps; i++) {
            let step = '';

            for (let j = 0; j < steps; j++) {
                if (j < steps-i-1) {
                    step += ' '
                } else {
                    step += '#';
                }
            }
            console.log(step)
        }
    }

  return (
    <div className="App-staircase">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input className='mr-2' type="number" min={0} max={100} value={steps} onChange={e=>setSteps(e.target.value)}/>
          <button onClick={()=>handleClick(steps)}>Build</button>
        </div>
      </div>
  )
}

export default Staircase