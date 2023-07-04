import React from 'react'
import './gdStyles.css'
import { useContext } from 'react'
import { PageContext } from '../../context/pageContext'
import { FormContext } from '../../context/formContext'
import axios from 'axios'

const GeneralDetails = () => {

    const {setPage} =useContext(PageContext)
    const {setData}=useContext(FormContext)
    const {data}=useContext(FormContext)

    const setImage = (ev) => {
        setData({...data,profilePic:ev.target.files[0]})
    }
    const setResume = (ev) => {
        setData({...data,resume:ev.target.files[0]})
    }

    return (
        <div style={{ marginLeft: "90px", marginTop: "32px", width: "501px", height: "501px" }}>
            <form className='w-100'>
                <div class="mb-3 w-50">
                    <label for="exampleInputEmail1" class="form-label">Email Id:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setData({...data,email:e.target.value})}}/>
                </div>
                <div className=' d-flex flex-column'>
                    <div className='d-flex w-75'>
                        <div className='w-25'>
                            <label htmlFor="title">Title :</label>
                            <select class="form-select " id='title' aria-label="Default select example" onChange={(e)=>{setData({...data,title:e.target.value})}}>
                                <option value="">      </option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Dr">Dr</option>
                            </select>
                        </div>
                        <div className='ms-4 w-75'>
                            <label htmlFor="name">Full Name:</label>
                            <input class="form-control " type="text" id='name' aria-label=".form-control-lg example" onChange={(e)=>{setData({...data,name:e.target.value})}}/>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <div className='d-flex flex-column w-50 datob'>
                            <label htmlFor="dob">Date Of Birth :</label>
                            <input class="form-control ps-4" type="date" id='dob' aria-label=".form-control-lg example" onChange={(e)=>{setData({...data,dob:e.target.value})}}/>
                        </div>
                        <div className='ms-4 w-75'>
                            <label htmlFor="name">Current City :</label>
                            <input class="form-control " type="text" id='name' aria-label=".form-control-lg example" onChange={(e)=>{setData({...data,city:e.target.value})}}/>
                        </div>
                    </div>
                    <div className='mt-5 mb-5'>
                        <p>Referral Id : <span className='ms-5'>REF123FDGD3</span></p>
                    </div>
                    <div className='d-flex align-items-center '>
                        <p className='me-5 mt-3'>Profile Picture:</p>
                        <div class="btn btn-file text-dark" style={{ padding: "10px 45px", backgroundColor: "#DBDBDB" }}>
                            Upload <input type="file" onChange={ev => setImage(ev)}/>
                        </div>
                    </div>
                    <div className='d-flex align-items-center mt-5'>
                        <p className='me-5 mt-3'>Resume Upload:</p>
                        <div class="btn btn-file text-dark" style={{ padding: "10px 45px", backgroundColor: "#F2F2F2", boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25)" }}>
                            Upload from this device <input type="file" onChange={ev => setResume(ev)}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex mt-4' style={{marginLeft:"337px"}}>
                    <button type="button" class="btn btn-outline-secondary me-2" >Cancel</button>
                    <button class="btn btn-primary" type="button" onClick={()=>{setPage((prev) => prev + 1)}}>Next</button>
                </div>
            </form>
        </div>
    )
}

export default GeneralDetails