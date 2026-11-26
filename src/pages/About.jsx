import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About</h1>
      <div className="about-section">
        <h2>Purpose</h2>
        <p>
          Dev-Term Flashcards is a simple educational web application made to
          help students learn programming terminology. Each card shows a term
          on the front. Click the card to flip it over and read the definition
          on the back. It is an easy way to review key terms before a test or
          an interview.
        </p>
      </div>

      <div className="about-section">
        <h2>How It Was Built</h2>
        <p>
          This application was developed using React, a JavaScript library for
          building user interfaces. It is a small front-end project: there is
          no backend or database, and all the flashcard data is stored in a
          simple JavaScript file inside the project.
        </p>
      </div>

      <div className="about-section">
        <h2>Technologies Used</h2>
        <ul>
          <li>React for building the interface with components</li>
          <li>React Router DOM for navigating between pages</li>
          <li>React useState for flipping cards and changing the current card</li>
          <li>Plain CSS for the design and the flip animation</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
