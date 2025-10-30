import React from 'react'
import './AboutCommunication.css';
import { FaSearch } from 'react-icons/fa';
function AboutCommunication({ heading }) {
    return (
        <>
            <div className="skill-card">
                <div className="icon">
                    <FaSearch className="fas fa-users" />
                </div>
                <h2>{heading}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus quasi facere cumque fuga.
                    Recusandae ducimus voluptates corporis porro consectetur neque iure beatae impedit veniam ratione.
                </p>
            </div>
        </>

    )
}
export default AboutCommunication;