import React from 'react'
import './PersonalTempForm.css';

const PersonalTempForm = ({ comfortTemp, handleMyDegrees, handleSubmitDegrees }) => (
  <form className='personal-form'>
  <label className='desired-temp'>Desired Temp: </label>
    <input
      type='number'
      name='comfortTemp'
      id='personalTemp'
      placeholder='Degrees of Comfort'
      value={comfortTemp}
      onChange={handleMyDegrees}
    />
  <button type='submit' className='button' onClick={handleSubmitDegrees}>Submit</button>
  </form>
)

export default PersonalTempForm;
