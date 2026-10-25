import { useState} from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages';
import './App.css'

function App() {

    const [chatMessages, setChatMessages] = useState([{
        id: 'id1',
        message: "Hello Chatbot",
        sender: "user"
    }, {
        id: 'id2',
        message: "Hello! How can I help you?",
        sender: "robot"
    }]);
    
    return (
        <div className="app-container">
            <ChatMessages 
                chatMessages={chatMessages}
            />
            <ChatInput 
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App
