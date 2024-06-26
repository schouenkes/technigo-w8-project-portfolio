import { Headline } from "../components/Headline.jsx";
import "./Tech.css";

export const Tech = () => {
  return (
    <section className="tech-container">
      <div className="tech-content-container">
        <Headline style="tech-title" title="Tech" />
        <p>
          HTML, CSS, JavaScript, ES6, JSX, React, React Hooks, Redux.js, Node.js, Mongo DB, Web Accessibility, API:s,
          mob-programming, pair-programming, Github.
        </p>
      </div>
    </section>
  );
};
