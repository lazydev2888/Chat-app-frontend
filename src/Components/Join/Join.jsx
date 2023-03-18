import React, { useState } from 'react'
import "./join.css"
import ChatImage from "../../images/Chatimage.svg";
import { Link } from 'react-router-dom';



let user;
const Join = () => {

const [name, setname] = useState('');
console.log(name);

    const sendUser = () => {
        user = document.getElementById('joinInput').value;
        document.getElementById('joinInput').value = '';
    }
  return (
   <>
    <div className="JoinPage">
        <div className="JoinContainer">
            <img src={ChatImage} alt="Logo" />
            <h1>Indi Chat</h1>
            <input type="text" onChange={(e)=> setname(e.target.value)} id='joinInput' placeholder='Enter Your Name' />
         <Link onClick={(event)=> !name ? event.preventDefault():null} to="/chat">   <button onClick={sendUser} className='joinbtn'>Login</button></Link>
        </div>
    </div>
    </>
  )
}

export default Join
export {user};