function Dashboard() {
  return (
    <div className="dashboard">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to SkillSphere 👋</h1>
        <p>
          Track your skills, projects, certifications, and achievements in one
          place.
        </p>
      </section>

      {/* Statistics */}
      <section className="stats-grid">
        <div className="card">
          <h3>Skills</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Projects</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Certificates</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Achievements</h3>
          <p>0</p>
        </div>
      </section>

      {/* Skill Progress */}
      <section className="dashboard-section">
        <h2>Skill Progress</h2>

        <div className="card">
          <p>JavaScript</p>
          <progress value="70" max="100"></progress>

          <p>React</p>
          <progress value="50" max="100"></progress>

          <p>Python</p>
          <progress value="60" max="100"></progress>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="dashboard-section">
        <h2>Recent Activity</h2>

        <div className="card">
          <p>No recent activities yet.</p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="dashboard-section">
        <h2>Quick Actions</h2>

        <div className="quick-actions">
          <button className="btn btn-primary">Add Skill</button>
          <button className="btn btn-primary">Add Project</button>
          <button className="btn btn-primary">Add Certificate</button>
          <button className="btn btn-primary">Update Profile</button>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
