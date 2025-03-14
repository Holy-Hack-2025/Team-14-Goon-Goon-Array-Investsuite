import { useState } from 'react'
import './App.css'
import ProfileComponent from './components/ProfileComponent/ProfileComponent';

function App() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className='main-container'>
      <ProfileComponent 
        id='0'
        hoveredId={hoveredId}
        setHoveredId={setHoveredId}
      />
      <ProfileComponent 
        id='1'
        hoveredId={hoveredId}
        setHoveredId={setHoveredId}
      />
      <ProfileComponent 
        id='2'
        hoveredId={hoveredId}
        setHoveredId={setHoveredId}
      />
    </div>
  )
}

export default App