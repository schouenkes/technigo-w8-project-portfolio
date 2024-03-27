import { Headline } from "../components/Headline.jsx";

export const Introduction = () => {
  return (
    <section className="intro-container">
      <img className="profile-img" src="src/assets/profileImg.jpg" alt="profile image of Maja" />
      <div className="intro-header-box">
        <Headline style="sub-header" title="Hi, I'm Maja Schouenke" />
        <Headline style="title" title="Frontend Developer" />
      </div>
      <div className="intro-text-box">
        <p>Presentational text</p>
      </div>
      <img className="arrow-icon" src="src/assets/arrow.svg" alt="an arrow" />
    </section>
  );
};