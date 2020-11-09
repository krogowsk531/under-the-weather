import React from 'react'
import './PersonalTempForm.css';
import PropTypes from 'prop-types';


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

PersonalTempForm.propTypes = {
  comfortTemp: PropTypes.number,
  handleMyDegrees: PropTypes.func.isRequired,
  handleSubmitDegrees: PropTypes.func.isRequired,
}
