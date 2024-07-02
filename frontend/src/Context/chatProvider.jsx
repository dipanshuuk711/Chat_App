import { createContext, useContext, useEffect, useState } from 'react'

const ChatContext = createContext();

const ChatProvider = ({ children }) => {

     const [user, setUser] = useState();

     useEffect(() => {
          const userInfo = JSON.parse(localStorage.getItem("userInfo"))
          setUser(setUser);

          if (!userInfo) {
               history.pushState("/",'/')
          }
     }, [user])

     return (
          <ChatContext.Provider value={{ user, setUser }}>
               {children}
          </ChatContext.Provider>
     )
};

export const ChatState = () => {
     useContext(ChatContext);
}

export default ChatProvider;