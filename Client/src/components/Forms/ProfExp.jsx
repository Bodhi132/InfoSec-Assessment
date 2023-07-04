import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { PageContext } from '../../context/pageContext'

const ProfExp = () => {

    const {setPage} =useContext(PageContext)

    const [exp, setExp] = useState([{ org: "", desg: 0, join: null, rel: null }])

    let handleChange = (i, e) => {
        let newFormValues = [...exp];
        newFormValues[i][e.target.name] = e.target.value;
        setExp(newFormValues);
    }

    let addFormFields = () => {
        setExp([...exp, { org: "", desg: 0, join: null, rel: null }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...exp];
        newFormValues.splice(i, 1);
        setExp(newFormValues)
    }

    return (
        <form className='w-100 mt-4 ms-5'>
            <div className='d-flex'>
                <div className='me-3 ms-4'>Is Experienced :</div>
                <div class="form-check me-3">
                    <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">
                        No
                    </label>
                </div>
            </div>
            {exp.map((element, index) => (
                <div className="form-inline" key={index}>
                    <div className='d-flex mt-4'>
                        <div className='ms-4 w-50'>
                            <label htmlFor="name" className='mb-1'>Organization Name:</label>
                            <input class="form-control " type="text" name='name' aria-label=".form-control-lg example" value={element.org || ""} onChange={e => handleChange(index, e)} />
                        </div>
                        <div className='ms-4 w-50'>
                            <label htmlFor="name" className='mb-1'>Designation:</label>
                            <input class="form-control " type="text" name='name' aria-label=".form-control-lg example" value={element.desg || ""} onChange={e => handleChange(index, e)} />
                        </div>
                    </div>
                    <div class="form-floating ms-4 mt-4">
                        <p className='mb-1'>Responsibilities</p>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    </div>
                    <div className='ms-4 w-75 mt-4'>
                        <label htmlFor="name" className='mb-1'>Joining Date (mm/yy):</label>
                        <input class="form-control " type="month" name='name' aria-label=".form-control-lg example" value={element.join || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    <div className='ms-4 w-75 mt-4'>
                        <label htmlFor="name">Relieving Date (mm/yy):</label>
                        <input class="form-control " type="month" name='name' aria-label=".form-control-lg example" value={element.rel || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    {
                        index ?
                            <button type="button" className="button remove ms-4 my-3" onClick={() => removeFormFields(index)} >Remove</button>
                            : null
                    }
                </div>
            ))}
            <div className="button-section ms-5">
                <button className="btn " type="button" style={{ color: "blue" }} onClick={() => addFormFields()}> + Add New</button>
            </div>
            <div className='d-flex mt-4' style={{ marginLeft: "337px" }}>
                <button type="button" class="btn btn-outline-secondary me-2" onClick={() => { setPage((prev) => prev - 1) }}>Previous</button>
                <button class="btn btn-primary" type="button" onClick={() => { setPage((prev) => prev + 1) }}>Next</button>
            </div>
        </form>
    )
}

export default ProfExp