import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPhone } from 'react-icons/fa' 

function Contact() {
  return (
    <div>
      <Header/>
      <div className='md:px-20 my-5 p-5'>
          <p className='text-center font-bold text-3xl my-5'>Contact</p>
          <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, delectus! Molestiae debitis consequatur nobis, quis ipsam dolor aspernatur. Porro et beatae deleniti dolorum? Quaerat perferendis commodi laudantium nobis repellat delectus?
          Illum, veritatis eius aspernatur unde incidunt sint natus asperiores rem similique repellat dolore voluptatum, nisi quos sapiente harum est, quisquam assumenda labore vel nostrum. Voluptas adipisci praesentium illum a est?
          Laborum non cumque numquam temporibus deserunt totam autem dolorem. Iure minus placeat vel ducimus asperiores temporibus exercitationem earum eveniet odit quas, magnam praesentium laudantium facilis, sunt quisquam ipsum reprehenderit. Tenetur.
          Perspiciatis dicta ullam placeat aut. Minima asperiores mollitia id error quia? Soluta, eum dolorum suscipit voluptatem excepturi ratione incidunt aut dicta, temporibus corporis voluptatibus praesentium saepe officia. Consectetur, quos quasi?
          Mollitia consequuntur maxime nemo quidem autem at dolor voluptas quos ea? Dolore corporis ex odio similique dolores sapiente, sequi omnis eum molestias tenetur! Dolorem doloribus cupiditate aliquid totam delectus? Quisquam.</p>
      {/* Grid address ,number,email */}
      <div className='md:grid  grid-cols-3 items-center p-5 m-5 md:p-20'>
        {/* location */}
          <div className='flex items-center'>
            <div style={{height:"50px",width:"50px",borderRadius:"50%"}} className='flex items-center justify-center bg-gray-400'>
                  <FaLocationPin/>
            </div>
            <p className='ms-3'>123 Main streen london,france</p>
          </div>
        {/*Number  */}
          <div className='flex items-center'>
            <div style={{height:"50px",width:"50px",borderRadius:"50%"}} className='flex items-center justify-center bg-gray-400'>
                  <FaPhone/>
            </div>
            <p className='ms-3'>+91 8989238998</p>
          </div>
          {/* email */}
          <div className='flex items-center'>
            <div style={{height:"50px",width:"50px",borderRadius:"50%"}} className='flex items-center justify-center bg-gray-400'>
                  <FaEnvelope/>
            </div>
            <p className='ms-3'>contact@gamail.com</p>
          </div>
      </div>
      </div>      
      <Footer/>
    </div>
  )
}

export default Contact
