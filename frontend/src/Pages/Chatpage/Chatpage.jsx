import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Chatpage() {

     const [chats, setChats] = useState([])

     const url = 'http://localhost:3000'

     const fetchChats = async () => {
          const response = await axios.get(url + "/api/chats");
          setChats(response.data)
          console.log(response.data)
     }

     useEffect(() => {
          fetchChats()
     }, [])

     return (
          <div>
               {chats.map((chat) => <div key={chat._id}>{chat.chatName}</div>)}
          </div>
     )
}
