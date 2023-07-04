import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { PageContext } from '../../context/pageContext'

const Skills = () => {
    
    const {setPage} =useContext(PageContext)

    const [formValues, setFormValues] = useState([{ degree: "", year: 0, passyr: 0 }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
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
                    <div className='d-flex mb-5'>
                        <div className='ms-4 w-75'>
                            <label htmlFor="name">Name of Skills/Technology:</label>
                            <input class="form-control " type="text" name='name' aria-label=".form-control-lg example" value={element.degree || ""} onChange={e => handleChange(index, e)} />
                        </div>
                        <div className='ms-4 w-75'>
                            <label htmlFor="name">Experience in that skills:</label>
                            <input class="form-control " type="text" name='name' aria-label=".form-control-lg example" value={element.degree || ""} onChange={e => handleChange(index, e)} />
                        </div>
                    </div>
                    <div class="form-floating ms-4 mt-4">
                        <p className='mb-1'>Brief about projects</p>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
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

export default Skills