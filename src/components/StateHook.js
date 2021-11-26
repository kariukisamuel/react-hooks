import {useState} from 'react'
import {FaLightbulb} from 'react-icons/fa'

const StateHook = () => {
    const [bulbStatus, setBulbState] =useState(false)
    const switchLight = () =>{
         setBulbState(!bulbStatus)
    }
    return (
        <div className="card m-2 p-5 text-center">
            <h3 className="py-2">UseState Hook Example</h3>
            <FaLightbulb size={150} className={`mx-auto ${bulbStatus ? 'text-warning' : 'text-dark'}`}/>
            <button className={`my-4 ${bulbStatus ? 'btn btn-danger' : 'btn btn-success'}`} onClick={switchLight}> Switch Lights {bulbStatus ? 'Off' : 'On'}</button> 
        </div>
    )
}

export default StateHook
