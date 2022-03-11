import React from 'react'
import './Third.css'

const Third = () => {
    

  return (
    <div>
        <div className="card">
            <h2>Little Known Facts</h2>
            <p className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
        </div>

        <div class="dropdown">
            <span class="dropdown">Dropdown</span>
            <div class="dropdown-content">
                <a href="#">UI&UX Design</a>
                <a href="#">Web Development</a>
                <a href="#">Mobile Development</a>
            </div>
        </div>

        <div className='margin'>
            <p><strong>Resep Telor Ceplok:</strong></p>
            <ul>
            <li>Telor ayam 1 butir</li>
            <li>Minya goreng 1/2 cup</li>
            <li>Garam 1/2 sendok teh</li>
            <li>Merica 1/2 sendok teh</li>
            <li>Butter 1/2 sendok makan</li>
            </ul>
        </div>
    </div>
  )
}

export default Third