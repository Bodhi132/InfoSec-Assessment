import React from 'react'
import { useContext } from 'react'
import { PageContext } from '../../context/pageContext'

const Additional = () => {

    const {setPage} =useContext(PageContext)

    return (
        <form className='mt-4 ms-5'>
            <div className='d-flex'>
                <div className='me-3 ms-4'>Open to relocate:</div>
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
            <div className='d-flex'>
                <div className='me-3 ms-4'>Open For Remote Work:</div>
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
            <div className='d-flex'>
                <div className='me-3 ms-4'>Open to bring your own device: </div>
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
            <div className='d-flex mt-5 ms-4'>
                <div className='me-1'>
                    <label htmlFor="title" className='mt-3'>CTC - Current CTC :</label>
                    <select class="form-select " id='title' aria-label="Default select example" style={{ width: "79px", height: "46px", marginTop: "5px" }}>
                        <option value="INR">INR</option>
                    </select>
                </div>
                <div className='mt-5'>
                    <input type="number" className='pt-3' style={{ width: "215px", height: "46px", border: "1px solid #1C375A4D", borderRadius: "5px" }} />
                </div>
            </div>
            <div className='d-flex mt-5 ms-4'>
                <div className='me-1'>
                    <label htmlFor="title" className='mt-3'>CTC - Current CTC :</label>
                    <select class="form-select " id='title' aria-label="Default select example" style={{ width: "79px", height: "46px", marginTop: "5px" }}>
                        <option value="INR">INR</option>
                    </select>
                </div>
                <div className='mt-5'>
                    <input type="number" className='pt-3' style={{ width: "215px", height: "46px", border: "1px solid #1C375A4D", borderRadius: "5px" }} />
                </div>
            </div>
            <div className='d-flex'>
                <div className='me-3 ms-4'>Open to bring your own device: </div>
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
            <div className='d-flex'>
                <div className='me-3 ms-4'>Open to bring your own device: </div>
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
            <div className='ms-4 w-75'>
                <label htmlFor="name">Experience in that skills:</label>
                <input class="form-control " type="text" name='name' aria-label=".form-control-lg example" />
            </div>
            <div className='d-flex mt-4' style={{ marginLeft: "337px" }}>
                <button type="button" class="btn btn-outline-secondary me-2" onClick={() => { setPage((prev) => prev - 1) }}>Previous</button>
                <button class="btn btn-primary" type="button" onClick={() => { setPage((prev) => prev + 1) }}>Next</button>
            </div>
        </form>
    )
}

export default Additional