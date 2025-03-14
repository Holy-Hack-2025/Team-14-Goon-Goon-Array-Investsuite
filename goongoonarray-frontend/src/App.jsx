import { useState } from 'react'
import './App.css'
import ProfileComponent from './components/ProfileComponent/ProfileComponent';

function App() {
  return (
    <div className='main-container'>
      <ProfileComponent id='0'/>
      <ProfileComponent id='1'/>
      <ProfileComponent id='2'/>
    </div>
  )
}

export default App
