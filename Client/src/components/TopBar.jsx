import React from 'react'
import infosec from '../assets/infosec.jpg'
import './TopBar.css'
import { AiOutlineFileSearch } from 'react-icons/ai'
import {GrTableAdd} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'

const TopBar = () => {
    return (
        <>
            <div className='d-flex justify-content-between mx-5 mt-2'>
                <div className='d-flex align-items-center'>
                    <img src={infosec} alt="" srcset="" style={{ border: "none", width: "3.5rem" }} />
                    <p className='mt-1'>Securing Digital World!</p>
                </div>
                <div className='d-flex justify-content-evenly' style={{ width: "30%" }}>
                    <div className='d-flex flex-column align-items-center'>
                        <AiOutlineFileSearch style={{fontSize:"2rem"}}/>
                        <p>All Jobs</p>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <GrTableAdd style={{fontSize:"2rem"}}/>
                        <p>Add a candidate</p>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <CgProfile style={{fontSize:"2rem"}}/>
                        <p>My Profile</p>
                    </div>
                </div>
            </div>
            <div className='line'></div>
        </>
    )
}

export default TopBar