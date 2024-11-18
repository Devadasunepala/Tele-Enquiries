
import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home-container">
            <label className="question-label">
                When are you planning to buy your next car?
            </label>
            <div className="button-group">
                <button className="response-button"><Link to='/signup'>Within a month</Link></button>
                <button className="response-button"><Link to='/signup'>Within 2 months</Link></button>
                <button className="response-button"><Link to='/signup'>After 2 months</Link></button>
                <button className="response-button"><Link to='/signup'>Just browsing</Link></button>
            </div>
        </div>
    );
};

export default Home;
