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
  return <img src="issam.jpg" alt="Issam Abu" className="avatar" />;
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
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#00D9FF" />
      <Skill skill="Node.js" emoji="🚀" color="#00FF88" />
      <Skill skill="JavaScript" emoji="✨" color="#FFD700" />
      <Skill skill="Vue.js" emoji="👍" color="#42D392" />
      <Skill skill="Laravel" emoji="🚀" color="#FF2D20" />
      <Skill skill="HTML/CSS" emoji="👍" color="#FF6B6B" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.emoji}</span>
      <span>{props.skill}</span>
    </div>
  );
}

export default App;
