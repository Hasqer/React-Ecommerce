import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <div>

      <div className='text-white bg-color1 py-4 pb-5 px-4'>
        <div className='container-xxl d-flex justify-content-between'>
          <div>
            <span className='border-end pe-3 me-3 border-info'>hakkımızda</span>
            <span>redes@redes.com</span>
          </div>
          <div>
            Giriş yap / Kayıt ol
          </div>
        </div>
      </div>

      <div className='container-xxl mb-5'> 
        <Navbar></Navbar>
      </div>
    </div>
  )
}
