import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you with the blood test today?', isBot: true },
  ]);
  const [file, setFile] = useState(null);

const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }]);
      setInput('');
      // Simulate a response from the bot
      setTimeout(() => {
        setMessages([...messages, { text: input, isBot: false }, { text: 'Your blood test results are being analyzed. We will report back shortly.', isBot: true }]);
      }, 1000);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);

    if (e.target.files.length) {
      setMessages([...messages, { text: 'File uploaded successfully. Analyzing...', isBot: true }]);
      setTimeout(() => {
        setMessages([...messages, { text: 'Your blood test results are being analyzed. We will report back shortly.', isBot: true }]);
      }, 2000);
    }
  };

  return (
    <div className="chatbot-container" >
      <div className="chatbot-card" style={{ marginTop: '190px' }}>
        <div className="chatbot-header">Blood Test ChatBot</div>
        <div className="chatbot-body">
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>
        <div className="chatbot-footer">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={{ color: 'black' }} // Set input text color to black
          />
          <button onClick={handleSend}>Send</button>
        </div>
        <div className="file-upload">
          <input
            type="file"
            accept=".pdf, .doc, .docx, .xls, .xlsx, .csv"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
