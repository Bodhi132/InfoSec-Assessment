import React, { useState } from 'react'
// import './styles.css'
import { useContext } from 'react'
import { PageContext } from '../../context/pageContext'
import { FormContext } from '../../context/formContext'

const EdDetails = () => {

    const {setPage} =useContext(PageContext)
    const {setData}=useContext(FormContext)
    const {data}=useContext(FormContext)

    // const [formValues, setFormValues] = useState([{ degree: "", year: 0, passyr: 0 }])

    const educationalDetails = {data}

    let handleChange = (i, e) => {
        let newFormValues = [...educationalDetails];
        newFormValues[i][e.target.name] = e.target.value;
        // setFormValues(newFormValues);
        setData({...data,educationalDetails:newFormValues})
    }

    let addFormFields = () => {
        setFormValues([...formValues, { degree: "", year: 0, passyr: 0 }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <form className='w-100 mt-4 ms-5' onSubmit={handleSubmit}>
            {formValues.map((element, index) => (
                <div className="form-inline" key={index}>
                    <div className='ms-4 w-75'>
                        <label htmlFor="name">Degree Name:</label>
                        <input class="form-control " type="text" name='name' aria-label=".form-control-lg example" value={element.degree || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    <div className='ms-4 w-75'>
                        <label htmlFor="name">Year of Passing:</label>
                        <input class="form-control " type="text" name='name' aria-label=".form-control-lg example" value={element.year || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    <div className='ms-4 w-75'>
                        <label htmlFor="name">College/University:</label>
                        <input class="form-control " type="text" name='name' aria-label=".form-control-lg example" value={element.passyr || ""} onChange={e => handleChange(index, e)} />
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

export default EdDetails