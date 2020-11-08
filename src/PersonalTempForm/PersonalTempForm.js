import React from 'react'

const PersonalTempForm = ({ comfortTemp, handleMyDegrees, handleSubmitDegrees }) => (
  <form>
  <label>Desired Temp: </label>
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
