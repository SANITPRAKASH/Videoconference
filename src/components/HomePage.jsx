import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import CSS
import { FaUserCircle } from "react-icons/fa"; // Import user icon

const HomePage = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = () => {
        if (input.trim()) {
            navigate(`/room/${input.trim()}`);
        } else {
            alert("Please enter a valid Room ID");
        }
    };

    return (
        <div className="home-container">
            {/* Dummy User Profile */}
            <div className="user-profile">
                <FaUserCircle className="user-icon" />
                <span className="user-name">Sanit</span>
            </div>

            {/* Left Half with Image */}
            <div className="home-left">
                <img src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ubmVjdGluZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Meeting" className="meeting-image" />
            </div>

            {/* Right Half with Join Box */}
            <div className="home-right">
                <div className="join-box">
                    <h2>Join a Meeting</h2>
                    <input 
                        type="text" 
                        placeholder="Enter Room ID"  
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={submitHandler}>Join Room</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
