import React from 'react'

const Forecast = ({title}) => {
  return (
    <div>
        <div style={{display:"flex"}}>
            <p>{title}</p>
        </div>
        <hr />
        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>

            <div  style={{display:"flex", flexDirection:"column" ,alignItems:"center",justifyContent:"center"}}>
                <p>04:30 pm</p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p>22*</p>
            </div>

            <div  style={{display:"flex", flexDirection:"column" ,alignItems:"center",justifyContent:"center"}}>
                <p>04:30 pm</p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p>22*</p>
            </div>

            <div  style={{display:"flex", flexDirection:"column" ,alignItems:"center",justifyContent:"center"}}>
                <p>04:30 pm</p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p>22*</p>
            </div>

            <div  style={{display:"flex", flexDirection:"column" ,alignItems:"center",justifyContent:"center"}}>
                <p>04:30 pm</p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p>22*</p>
            </div>

            <div  style={{display:"flex", flexDirection:"column" ,alignItems:"center",justifyContent:"center"}}>
                <p>04:30 pm</p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p>22*</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast