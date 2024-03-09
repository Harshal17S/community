import React from 'react'
import '../CSS/Sidebar.css'
import Meet from '../assets/meet.gif'
import Notes from '../assets/notes.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';




const Sidebar = () => {


  

  return (
    <div className='sidebar-container'>
      <div className="f">
        <img src={Meet} alt="" style={{ width: '30%' }} />
        <a href="https://refmemeet.vercel.app" target='_blank' style={{ width: '30%', textDecoration: 'none', color: 'black' }}>Create Meet</a>
      </div>


      <div className="t">
        <img src={Notes} alt="" style={{ width: '40%' }} />
        <a href="https://react-flash-cards-rho.vercel.app/" target='_blank' style={{ width: '30%', textDecoration: 'none', color: 'black' }}>Notes</a>
      </div>
      

      {/* <div style={{ height: '20%' }}>

      </div> */}

      

    </div>
  )
}

export default Sidebar