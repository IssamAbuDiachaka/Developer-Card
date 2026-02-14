import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar-container">
      <img src="issam.jpg" alt="Issam Abu" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Issam Abu</h1>
      <p className="title">SENIOR FULL-STACK DEVELOPER</p>
      <p className="bio">I can build anything...</p>
    </div>
  );
}

function SkillList() {
  const skills = [
    { skill: "React", emoji: "💪", color: "#00D9FF" },
    { skill: "Node.js", emoji: "🚀", color: "#00FF88" },
    { skill: "JavaScript", emoji: "✨", color: "#FFD700" },
    { skill: "HTML/CSS", emoji: "👍", color: "#FF6B6B" },
  ];

  return (
    <div className="skill-list">
      {skills.map((item, index) => (
        <div
          key={index}
          className="skill"
          style={{ backgroundColor: item.color }}
        >
          <span>{item.emoji}</span>
          <span>{item.skill}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
