import './ProfileComponent.css';
import React from 'react';

function ProfileComponent({ id, hoveredId, setHoveredId }) {
    const isBlurred = hoveredId !== null && hoveredId !== id;
    
    return (
        <div className={`profile-container ${isBlurred ? 'blurred' : ''}`} 
        id={`profile-${id}`}>
            <div className='node-left-container'>
                <div className='node-left'>

                </div>
            </div>

            <div className='line left-to-right'>

            </div>

            <div className='node-right-container'>
                <div className='node-right'>

                </div>
            </div>

            <div className='line right-to-left'>

            </div>

            <div className='node-left-container'>
                <div className='node-left'>

                </div>
            </div>

            <div className='line left-to-right'>

            </div>

            <div className='node-right-container'>
                <div className='node-right'>

                </div>
            </div>

            <div className='line right-to-left'>

            </div>

            <div className='node-left-container'>
                <div className='node-left'>

                </div>
            </div>

            <div className='line left-to-mid'>

            </div>

            <div className='profile-type-container'>
                <div className='profile-type'
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}>

                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;