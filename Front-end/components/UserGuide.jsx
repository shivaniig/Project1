import React from 'react';
import './UserGuide.css'; // Import the CSS file for styling

const UserGuide = () => {
  return (
    <div className="guide-container" >
      <div className="guide-card" style={{ marginTop: '140px', padding: '20px' }}>
        <h1 className="guide-header">How to Use the Blood Test ChatBot</h1>
        <div className="guide-content">
          <section className="guide-section">
            <h2 className="guide-subheader">1. Chat with the Bot</h2>
            <p>
              Start by typing your message in the text input box at the bottom of the chat. The chat bot can assist you with analyzing blood test results and answering related queries.
            </p>
            <div className="guide-image">
              <img src="https://img.freepik.com/free-vector/floating-robot_78370-3669.jpg?w=740&t=st=1722372599~exp=1722373199~hmac=7cc98c3c6d91122c638e8904d6ffad2bb665e9ad1ae3ee3c653427f1c9f5e7b6" alt="Chat Example" />
            </div>
          </section>

          <section className="guide-section">
            <h2 className="guide-subheader">2. Upload Your Blood Test File</h2>
            <p>
              To analyze your blood test results, use the file upload feature. Click on the 'Choose File' button, select your file from your device, and then the bot will process the file and provide feedback.
            </p>
            <div className="guide-image">
              <img src="https://as1.ftcdn.net/v2/jpg/03/31/15/54/1000_F_331155460_JqEVFqLmkWIGPtCLditnCuUg7HKRVnuf.jpg" alt="File Upload Example" />
            </div>
          </section>

          <section className="guide-section">
            <h2 className="guide-subheader">3. Review the Bot's Responses</h2>
            <p>
              After sending your message or uploading a file, the bot will respond with the analysis or instructions. The responses will appear in the chat area. If you have further questions, feel free to ask!
            </p>
            <div className="guide-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGzWoDOrXpO8POgo_litLUaiWbVKEfStTTA&s" alt="Response Example" />
            </div>
          </section>

          <section className="guide-section">
            <h2 className="guide-subheader">4. Instructions for Hospitals</h2>
            <p>
              Hospitals can use this chat bot to streamline blood test analysis and patient queries. To get started, make sure the chat bot is integrated into your hospital's system and that staff are trained to use it effectively. You can monitor and manage the chat bot's performance through the administrative panel.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-subheader">5. Instructions for Labs</h2>
            <p>
              Labs can utilize this chat bot to process blood test results and communicate findings to hospitals or patients. Ensure that the chat bot is set up to handle various file formats and that it can interpret and analyze test data accurately. Regularly update the chat bot's database with the latest test criteria and guidelines.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
