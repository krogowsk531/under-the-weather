export const getLocationWeather = async (location) => {
  return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=fd591a2345e514d108073dc7a9c7817f`)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
  })
}
