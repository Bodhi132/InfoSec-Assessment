import React from 'react'
import { useContext } from 'react'
import './FormNavStyles.css'
import { PageContext } from '../../context/pageContext'

const FormNav = () => {

   const { page } = useContext(PageContext)

  return (
    <div className='d-flex ' style={{marginTop:"2rem",}}>
        <div id='nav-item' className={page==1?"select":""}>General <br /> Details</div>
        <div id='nav-item' className={page==2?"select":""}>Educational <br /> Details</div>
        <div id='nav-item' className={page==3?"select":""}>Professional <br /> Experience</div>
        <div id='nav-item' className={page==4?"select":""}>Skills and <br />Experties</div>
        <div id='nav-item' className={page==5?"select":""}>Additional <br />Details</div>
        <div id='nav-item' className={page==6?"select":""}>Contact <br /> Details</div>
    </div>
  )
}

export default FormNav