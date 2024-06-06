import './Weather.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='search' />
            <img src={search_icon} alt="" />

        </div>
        <img src={clear_icon} alt="" className='weather-icon'/>
        <p className='temperature'>16°c</p>
        <p className='location'>London</p>

        
    </div>
  )
}

export default Weather