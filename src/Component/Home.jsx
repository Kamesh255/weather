import React from 'react'
import './style/Home.css'
import { BsSearch } from "react-icons/bs";
import { AiTwotoneEnvironment } from "react-icons/ai";


const Home = () => {
  return (
    <div className='container'>
        <div className='search'>
            <div>
                <AiTwotoneEnvironment />
            </div>
            <div>
                <input style={{border:"none", fontSize:"20px", width:"full", height:"100%"}} type="text" placeholder='Search your city' />
            </div>
            <div>
                <BsSearch />
            </div>

        </div>
        <div>

        </div>
    </div>
  )
}

export default Home