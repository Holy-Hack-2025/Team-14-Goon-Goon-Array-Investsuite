import './ProfileComponent.css';
import React from 'react';

const riskProfiles = [
    {
        profile_id: 0,
        lowestPer: -50,
        higherPer: 20
    },

    {
        profile_id: 1,
        lowestPer: -20,
        higherPer: 10
    },

    {
        profile_id: 2,
        lowestPer: -5,
        higherPer: 5
    }
]

function ProfileComponent({ id, hoveredId, setHoveredId }) {
    const isBlurred = hoveredId !== null && hoveredId !== id;

    return (
        <div className={`profile-container ${isBlurred ? 'blurred' : ''}`} 
        id={`profile-${id}`}>
            <div className='node-left-container'>
                <div className='node-left'>
                    <span className='tooltip'>-50% - 30%</span>
                </div>
            </div>

            <div className='line left-to-right'>

            </div>

            <div className='node-right-container'>
                <div className='node-right'>
                    <span className='tooltip'>-50% - 30%</span>
                </div>
            </div>

            <div className='line right-to-left'>

            </div>

            <div className='node-left-container'>
                <div className='node-left'>
                <span className='tooltip'>-50% - 30%</span>
                </div>
            </div>

            <div className='line left-to-right'>

            </div>

            <div className='node-right-container'>
                <div className='node-right'>
                <span className='tooltip'>-50% - 30%</span>
                </div>
            </div>

            <div className='line right-to-left'>

            </div>

            <div className='node-left-container'>
                <div className='node-left'>
                <span className='tooltip'>-50% - 30%</span>
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