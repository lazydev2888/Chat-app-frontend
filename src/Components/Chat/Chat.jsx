import React, { useEffect, useState } from 'react'
import "./chat.css"
import  SocketIo  from 'socket.io-client'
import {BsFillSendFill} from 'react-icons/bs'
import {user} from '../Join/Join'

let socket;
const ENDPOINT = 'http://localhost:4500';



const Chat = () => {
  
const [id, setid] = useState('')

  const send = document.getElementById('chatInput').value;
  socket.emit('message', { message , id});
  document.getElementById('chatInput').value = '';

  

useEffect(() => {
   socket = SocketIo(ENDPOINT, {transports: ['websocket']});
  socket.on('connect', () => {
    alert("connected")
    setid(socket.id)
  })

  socket.emit('Joined', {user})
  socket.on('Welcome', (data) => {
    console.log(data.user, data.message);
    })
    socket.on('userJoined', (data) => {
      console.log(data.user, data.message);
    })
    socket.on('userLeft', (data) => {
      console.log(data.user, data.message);
    })
  return () => {
    socket.emit('disconnected', `{user}`)
    socket.off()
  }
}, [])


  return (
    <div className='chatPage'>
       <div className='chatContainer'>
          <div className='chatHeader'></div> 
          <div className='chatBox'></div>
          <div className='inputBox'>
            <input type="text" id='chatInput' />
            <button onClick={send} className='sendbtn'> <span className='sendbtnicon'> <BsFillSendFill  /></span></button>
          </div>  
              
       </div>
    </div>
  )
}

export default Chat