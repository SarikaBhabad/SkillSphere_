import React from 'react'

const Sidebar = () => {
  return (
   <>
   <aside className="sidebar">
    <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="/certifications">Certifications</a>
        <a href="/profile">Profile</a>
        <a href="/activities">Activities</a>
        <a href="/achievements">Achievements</a>
    </nav>
   </aside>
   </>
  )
}

export default Sidebar
