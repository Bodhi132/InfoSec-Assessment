import React from 'react'
import { BiSolidBriefcase } from 'react-icons/bi'
import blue from '../assets/blue.png'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import '../components/SideBarStyles.css'
import { FaNotesMedical } from 'react-icons/fa'
import { BsFillShareFill } from 'react-icons/bs'
import {VscAccount} from 'react-icons/vsc'
import {CiSettings} from 'react-icons/ci'
import {IoIosLogOut} from 'react-icons/io'

const SideBar = () => {
  return (
    <div className='sidebar ms-5 shadow-2-strong'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex flex-column justify-content-center align-items-center pt-2' style={{ width: "90%" }}>
          <img src={blue} className='rounded-circle' alt="" style={{ width: "3rem", height: "3rem" }} />
          <div>Dr.Arvind K</div>
        </div>
      </div>
      <div className='d-flex flex-row ms-5 pt-3'>
        <div><BiSolidBriefcase style={{ fontSize: "1.2rem" }} /></div>
        <div className='ms-2 d-flex flex-column mb-4'>
          <div className='fw-bold mb-1'>Jobs</div>
          <div className=' mb-1'>Marked Jobs</div>
          <div className=' mb-1'>Referred Jobs</div>
          <div className=' mb-1'>Closed Jobs</div>
        </div>
      </div>
      <div className='d-flex flex-row ms-5 pt-3'>
        <div><FaNotesMedical style={{ fontSize: "1.2rem" }} /></div>
        <div className='ms-2 d-flex flex-column mb-3'>
          <div className='fw-bold mb-1'>Candidates</div>
          <div className=' mb-1 link-opacity-100'><a className="link-opacity-100" href="#">Add a candidate <br />to your database</a></div>
          <div className=' mb-1'>Your Candidate database</div>
          <div className=' mb-1'>Referred Candidate</div>
          <div className=' mb-1'>Selected Candidate</div>
        </div>
      </div>
      <div className='d-flex flex-row ms-5 mb-3'>
        <div><BsFillShareFill style={{ fontSize: "1.2rem" }} /></div>
        <div className='fw-bold mb-1 ms-3'>Referals</div>
      </div>
      <div className='d-flex flex-row ms-5 mb-3'>
        <div><VscAccount style={{ fontSize: "1.2rem" }} /></div>
        <div className='fw-bold mb-1 ms-3'>View/Update profile</div>
      </div>
      <div className='d-flex flex-row ms-5 mb-3'>
        <div><CiSettings style={{ fontSize: "1.5rem" }} /></div>
        <div className='fw-bold mb-1 ms-3'>Settings</div>
      </div>
      <div className='d-flex flex-row ms-5 mb-3 pb-4'>
        <div><IoIosLogOut style={{ fontSize: "1.5rem" }} /></div>
        <div className='fw-bold mb-1 ms-3'>LogOut</div>
      </div>
    </div>

  )
}

export default SideBar